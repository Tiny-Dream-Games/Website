import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service,
      budget,
      message,
    } = body;

    // Required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Check API key
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
       from: "Tiny Dream Games <info@tinydreamgames.com>",

  to: [
    process.env.CONTACT_EMAIL || "tinydreamgamesstudio@gmail.com",
  ],
      replyTo: email,

      subject: `New Project Inquiry — ${service}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          background: #f5f5f7;
          padding: 40px 20px;
        ">
          <div style="
            max-width: 680px;
            margin: auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #e5e7eb;
          ">

            <!-- Header -->
            <div style="
              background: #111827;
              padding: 28px 30px;
              color: #ffffff;
            ">
              <h1 style="
                margin: 0;
                font-size: 24px;
              ">
                New Project Inquiry
              </h1>

              <p style="
                margin: 8px 0 0;
                color: #c4b5fd;
                font-size: 14px;
              ">
                Tiny Dream Games
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">

              <h2 style="
                margin-top: 0;
                color: #111827;
                font-size: 18px;
              ">
                Client Details
              </h2>

              <table style="
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
              ">

                <tr>
                  <td style="
                    padding: 12px 0;
                    font-weight: bold;
                    color: #374151;
                    width: 130px;
                  ">
                    Name
                  </td>

                  <td style="
                    padding: 12px 0;
                    color: #111827;
                  ">
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 12px 0;
                    font-weight: bold;
                    color: #374151;
                  ">
                    Email
                  </td>

                  <td style="
                    padding: 12px 0;
                    color: #111827;
                  ">
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 12px 0;
                    font-weight: bold;
                    color: #374151;
                  ">
                    Phone / WhatsApp
                  </td>

                  <td style="
                    padding: 12px 0;
                    color: #111827;
                  ">
                    ${escapeHtml(phone || "Not provided")}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 12px 0;
                    font-weight: bold;
                    color: #374151;
                  ">
                    Service
                  </td>

                  <td style="
                    padding: 12px 0;
                    color: #111827;
                  ">
                    ${escapeHtml(service)}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding: 12px 0;
                    font-weight: bold;
                    color: #374151;
                  ">
                    Budget
                  </td>

                  <td style="
                    padding: 12px 0;
                    color: #111827;
                  ">
                    ${escapeHtml(budget || "Not specified")}
                  </td>
                </tr>

              </table>

              <hr style="
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 28px 0;
              " />

              <h2 style="
                color: #111827;
                font-size: 18px;
                margin-bottom: 12px;
              ">
                Project Details
              </h2>

              <div style="
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                border-radius: 12px;
                padding: 18px;
                color: #374151;
                line-height: 1.7;
                white-space: pre-wrap;
              ">
                ${escapeHtml(message)}
              </div>

              <p style="
                margin-top: 28px;
                font-size: 13px;
                color: #6b7280;
              ">
                You can reply directly to this email to contact the client.
              </p>

            </div>

            <!-- Footer -->
            <div style="
              background: #f9fafb;
              padding: 18px 30px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 12px;
            ">
              This inquiry was submitted through the Tiny Dream Games website.
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your inquiry right now.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}