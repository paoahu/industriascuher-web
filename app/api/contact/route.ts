import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
        from: "Industrias Cuher <onboarding@resend.dev>",
        to: ["acuencabo@gmail.com"], 
        subject: "Prueba desde el formulario de Industrias Cuher",
        html: `
          <h2>Nuevo mensaje del formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      });
      
      console.log("RESEND RESULT:", result);
      

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Error al enviar el email" },
      { status: 500 }
    );
  }
}
