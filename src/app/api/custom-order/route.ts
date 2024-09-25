import { NextRequest, NextResponse } from "next/server";
import { transport } from "@/lib/nodemailer";
import ejs from "ejs";
import fs from "fs-extra";
import path from "path";
import Mail from "nodemailer/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const email = formData.get("email") as string;
    const companyName = formData.get("companyName") as string;
    const departmentName = formData.get("departmentName") as string;
    const up = formData.get("up") as string;
    const product = formData.get("product") as string;
    const quantity = formData.get("quantity") as string;
    const printingMethod = formData.get("printingMethod") as string;
    const customDetail = formData.get("customDetail") as string;
    const shippingAddress = formData.get("shippingAddress") as string;
    const referenceFile = formData.get("reference") as File | null;

    // Read the email template
    const templatePath = path.resolve("src/templates/tempEmailCustomOrder.ejs");
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
      reference: referenceFile ? referenceFile.name : null,
    });

    const mailOptions: Mail.Options = {
      from: `"${email}" <${email}>`,
      to: process.env.COMPANY_EMAIL, // Replace with process.env.COMPANY_EMAIL in production
      subject: `New Custom Order Form Submission from ${companyName}`,
      html,
      attachments: [],
    };

    // Attach file if it exists
    if (referenceFile) {
      const buffer = await referenceFile.arrayBuffer();
      mailOptions.attachments!.push({
        filename: referenceFile.name,
        content: Buffer.from(buffer),
      });
    }

    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error processing form data:", error);
    return NextResponse.json(
      { error: "Failed to process form data" },
      { status: 500 },
    );
  }
}
