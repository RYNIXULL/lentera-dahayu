"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "info";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastContextValue {
  showToast: (title: string, message?: string, type?: ToastType) => void;
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
  info: (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, message?: string, type: ToastType = "info") => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      setToasts((prev) => [...prev, { id, type, title, message }]);

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        removeToast(id);
      }, 5000);
    },
    [removeToast]
  );

  const success = useCallback(
    (title: string, message?: string) => showToast(title, message, "success"),
    [showToast]
  );

  const error = useCallback(
    (title: string, message?: string) => showToast(title, message, "error"),
    [showToast]
  );

  const info = useCallback(
    (title: string, message?: string) => showToast(title, message, "info"),
    [showToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, success, error, info }}>
      {children}
      {/* Toast Render Portal */}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((toast) => {
          const isSuccess = toast.type === "success";
          const isError = toast.type === "error";

          return (
            <div
              key={toast.id}
              role="alert"
              className="pointer-events-auto flex items-start gap-3.5 p-4 sm:p-5 rounded-[26px] border-[2.5px] border-white bg-white shadow-[0_20px_45px_-6px_rgba(14,165,233,0.22),inset_3px_3px_8px_#FFFFFF,inset_-2px_-2px_6px_rgba(14,165,233,0.06)] transition-all duration-300 animate-slide-up"
            >
              <div className="shrink-0 mt-0.5">
                {isSuccess && (
                  <div className="w-9 h-9 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center border-2 border-white shadow-[0_4px_10px_rgba(16,185,129,0.15),inset_2px_2px_4px_#FFFFFF]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
                {isError && (
                  <div className="w-9 h-9 rounded-2xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center border-2 border-white shadow-[0_4px_10px_rgba(220,38,38,0.15),inset_2px_2px_4px_#FFFFFF]">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                )}
                {!isSuccess && !isError && (
                  <div className="w-9 h-9 rounded-2xl bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center border-2 border-white shadow-[0_4px_10px_rgba(14,165,233,0.15),inset_2px_2px_4px_#FFFFFF]">
                    <Info className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold tracking-tight text-[#1E293B]">{toast.title}</p>
                {toast.message && (
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{toast.message}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                aria-label="Tutup notifikasi"
                className="shrink-0 text-[#64748B] hover:text-[#0284C7] hover:bg-[#F0F9FF] rounded-xl p-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
