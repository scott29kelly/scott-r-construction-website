'use client';

import React, { useCallback, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  files: File[];
  onChange: (files: File[]) => void;
  maxFiles?: number;
  maxSizeMB?: number;
}

export function FileUpload({
  files,
  onChange,
  maxFiles = 5,
  maxSizeMB = 10,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (incoming: FileList | null) => {
      if (!incoming) return;
      const maxBytes = maxSizeMB * 1024 * 1024;
      const accepted: File[] = [];

      for (let i = 0; i < incoming.length; i++) {
        const f = incoming[i];
        if (!f.type.startsWith('image/')) continue;
        if (f.size > maxBytes) continue;
        if (files.length + accepted.length >= maxFiles) break;
        accepted.push(f);
      }

      if (accepted.length > 0) {
        onChange([...files, ...accepted]);
      }
    },
    [files, onChange, maxFiles, maxSizeMB]
  );

  const removeFile = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  return (
    <div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className="flex cursor-pointer flex-col items-center gap-3 border-2 border-dashed border-border px-6 py-8 text-center transition-colors hover:border-navy/40 hover:bg-cream/50"
      >
        <Upload size={24} className="text-navy/40" />
        <p className="text-body-sm text-navy/60">
          Drag photos here or click to browse
        </p>
        <p className="text-[13px] text-navy/40">
          Up to {maxFiles} images, {maxSizeMB}MB each
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            addFiles(e.target.files);
            e.target.value = '';
          }}
        />
      </div>

      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {files.map((file, i) => (
            <div key={`${file.name}-${i}`} className="group relative">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="h-20 w-20 rounded object-cover border border-border"
              />
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-navy text-white opacity-0 transition-opacity group-hover:opacity-100"
                aria-label={`Remove ${file.name}`}
              >
                <X size={12} />
              </button>
              <p className="mt-1 max-w-[80px] truncate text-[11px] text-navy/40">
                {file.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
