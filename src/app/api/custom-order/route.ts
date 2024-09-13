// pages/api/contact-form.ts
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
        email,
        companyName,
        departmentName,
        up,
        product,
        quantity,
        printingMethod,
        customDetail,
        shippingAddress,
        reference,
      } = await req.json();

      const templatePath = path.resolve(
        "src/templates/tempEmailCustomOrder.ejs",
      );

      const templateSource = await fs.readFile(templatePath, "utf-8");
      const html = ejs.render(templateSource, {
        email,
        companyName,
        departmentName,
        up,
        product,
        quantity,
        printingMethod,
        customDetail,
        shippingAddress,
        reference,
      });

      const mailOptions: Mail.Options = {
        from: `"${email}" <${email}>`,
        to: process.env.COMPANY_EMAIL,
        subject: `New Custom Order Form Submission from ${companyName}`,
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
