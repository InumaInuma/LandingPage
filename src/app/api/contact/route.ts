import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, product, message } = body;

    // Simple backend validations
    if (!name || !email || !product || !message) {
      return NextResponse.json(
        { isSuccess: false, message: "Por favor, completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { isSuccess: false, message: "Por favor, introduce un correo electrónico válido." },
        { status: 400 }
      );
    }

    // Here in real production, you would do:
    // 1. Send an email using Resend/SendGrid:
    //    await resend.emails.send({ ... })
    // 2. Or insert lead into database:
    //    await db.insertLead({ name, email, ... })

    // Simulate 600ms processing delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    console.log("Nuevo lead capturado en la Vitrina:", {
      name,
      email,
      phone,
      businessName,
      product,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        isSuccess: true,
        message: "¡Gracias por tu interés! Nos pondremos en contacto contigo en las próximas 24 horas para programar tu demo personalizada.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar el contacto de la vitrina:", error);
    return NextResponse.json(
      { isSuccess: false, message: "Ocurrió un error inesperado al enviar el mensaje. Inténtalo de nuevo más tarde." },
      { status: 500 }
    );
  }
}
