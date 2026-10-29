import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, scope, message } = body;

    // Strict validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama lengkap wajib diisi minimal 2 karakter." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Alamat email tidak valid." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Pesan atau ringkasan kebutuhan minimal 10 karakter." },
        { status: 400 }
      );
    }

    // Optional webhook dispatch if configured via environment variable
    const webhookUrl = process.env.CONTACT_NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("http")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            scope: scope || "General Inquiry",
            message: message.trim(),
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (webhookErr) {
        if (process.env.NODE_ENV === "development") {
          console.warn("Contact webhook notification error:", webhookErr);
        }
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Permintaan diskusi teknis berhasil diterima.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Gagal memproses permintaan formulir." },
      { status: 500 }
    );
  }
}
