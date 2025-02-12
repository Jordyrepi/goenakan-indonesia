import { transport } from "@/lib/nodemailer";
import ejs from "ejs";
import fs from "fs-extra";
import { NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";
import path from "path";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const {
        name,
        subject,
        email,
        phoneNumber,
        companyName,
        website,
        message,
      } = await req.json();

      const templatePath = path.resolve("src/templates/tempEmailContactUs.ejs");

      const templateSource = await fs.readFile(templatePath, "utf-8");
      const html = ejs.render(templateSource, {
        name,
        subject,
        email,
        phoneNumber,
        companyName,
        website,
        message,
      });

      const mailOptions: Mail.Options = {
        from: `"${email}" <${email}>`,
        to: process.env.COMPANY_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\subject: ${subject}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nCompany Name: ${companyName}\nWebsite: ${website}\n\nMessage:\n${message}`,
        html,
      };

      await transport.sendMail(mailOptions);
      return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to process form data" },
        { status: 500 },
      );
    }
  }
}
