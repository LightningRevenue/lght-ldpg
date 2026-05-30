"use client";

import React, { useMemo, useState } from "react";

export type SignatureAsset = {
  id: string;
  publicId: string;
  name: string;
  altText: string | null;
  fileName: string;
  contentType: string;
  fileSize: number;
  displayWidth: number;
  displayHeight: number | null;
  createdAt: string;
  url: string;
};

type Props = {
  assets: SignatureAsset[];
};

function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${Math.round(size / 1024)} KB`;
  }

  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function buildImageHtml(origin: string, asset: SignatureAsset) {
  const src = `${origin}${asset.url}`;
  const height = asset.displayHeight ? ` height="${asset.displayHeight}"` : "";

  return `<img src="${src}" width="${asset.displayWidth}"${height} alt="${asset.altText || asset.name}" style="display:block;border:0;outline:none;text-decoration:none;width:${asset.displayWidth}px;${asset.displayHeight ? `height:${asset.displayHeight}px;` : "height:auto;"}" />`;
}

export default function SignatureAssetsManager({ assets }: Props) {
  const [name, setName] = useState("");
  const [altText, setAltText] = useState("");
  const [displayWidth, setDisplayWidth] = useState("180");
  const [displayHeight, setDisplayHeight] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const origin = useMemo(() => (typeof window === "undefined" ? "" : window.location.origin), []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file || isSubmitting) {
      return;
    }

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("altText", altText);
    formData.append("displayWidth", displayWidth);
    formData.append("displayHeight", displayHeight);

    try {
      const response = await fetch("/api/admin/signature-assets", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "Asset upload failed.");
      }

      setSuccess("Asset uploaded. Refreshing list...");
      window.location.reload();
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Asset upload failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyHtml = async (asset: SignatureAsset) => {
    await navigator.clipboard.writeText(buildImageHtml(origin, asset));
    setSuccess(`Copied signature HTML for ${asset.name}.`);
  };

  const copyUrl = async (asset: SignatureAsset) => {
    await navigator.clipboard.writeText(`${origin}${asset.url}`);
    setSuccess(`Copied public URL for ${asset.name}.`);
  };

  return (
    <section className="mt-12 rounded-[2rem] border border-black/10 bg-white p-4 sm:p-6">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black/35">Signature assets</div>
          <h2 className="text-3xl font-medium tracking-tight text-black">Hosted images for signatures</h2>
        </div>
        <span className="text-sm text-black/45">Upload once, use the public URL anywhere.</span>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 rounded-3xl border border-black/10 bg-[#fafafa] p-4 lg:grid-cols-[1fr_1fr_130px_130px_auto]">
        <input
          type="text"
          placeholder="Asset name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#2f5b7c]"
        />
        <input
          type="text"
          placeholder="Alt text"
          value={altText}
          onChange={(event) => setAltText(event.target.value)}
          className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#2f5b7c]"
        />
        <input
          type="number"
          min="8"
          max="1200"
          placeholder="Width"
          value={displayWidth}
          onChange={(event) => setDisplayWidth(event.target.value)}
          required
          className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#2f5b7c]"
        />
        <input
          type="number"
          min="8"
          max="1200"
          placeholder="Height optional"
          value={displayHeight}
          onChange={(event) => setDisplayHeight(event.target.value)}
          className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none focus:border-[#2f5b7c]"
        />
        <button
          type="submit"
          disabled={!file || isSubmitting}
          className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2f5b7c] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
          className="lg:col-span-5 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-4 file:py-2 file:text-sm file:font-bold file:text-white"
        />
      </form>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      {success && <p className="mt-4 text-sm text-emerald-600">{success}</p>}

      <div className="mt-6 grid grid-cols-1 gap-4">
        {assets.map((asset) => (
          <div key={asset.id} className="grid grid-cols-1 gap-4 rounded-3xl border border-black/10 bg-white p-4 lg:grid-cols-[220px_1fr_auto] lg:items-center">
            <div className="flex min-h-28 items-center justify-center rounded-2xl border border-black/10 bg-[#fafafa] p-4">
              <img
                src={asset.url}
                alt={asset.altText || asset.name}
                width={asset.displayWidth}
                height={asset.displayHeight || undefined}
                className="max-h-24 max-w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-lg font-medium tracking-tight text-black">{asset.name}</div>
              <div className="mt-1 truncate text-sm text-black/45">{origin}{asset.url}</div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-black/45">
                <span className="rounded-full bg-black/5 px-3 py-1">{asset.displayWidth}px wide</span>
                <span className="rounded-full bg-black/5 px-3 py-1">{asset.displayHeight ? `${asset.displayHeight}px high` : "auto height"}</span>
                <span className="rounded-full bg-black/5 px-3 py-1">{formatFileSize(asset.fileSize)}</span>
                <span className="rounded-full bg-black/5 px-3 py-1">{asset.contentType}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button type="button" onClick={() => copyUrl(asset)} className="rounded-full border border-black/10 px-5 py-2 text-sm font-bold text-black transition-colors hover:border-black hover:bg-black hover:text-white">
                Copy URL
              </button>
              <button type="button" onClick={() => copyHtml(asset)} className="rounded-full bg-black px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#2f5b7c]">
                Copy HTML
              </button>
            </div>
          </div>
        ))}

        {assets.length === 0 && (
          <div className="rounded-3xl border border-black/10 bg-[#fafafa] p-10 text-center text-sm text-black/45">
            No signature assets uploaded yet.
          </div>
        )}
      </div>
    </section>
  );
}
