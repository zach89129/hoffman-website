import Link from "next/link";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Dr. Edward Hoffman. All rights
        reserved.
      </p>
      <p className="footer-links">
        <Link href="/services/dot-physicals">DOT physicals</Link>
        <span className="footer-links-sep"> · </span>
        <Link href="/services/immigration-physicals">
          Immigration physicals (I-693)
        </Link>
      </p>
      <span id="freepik-credit">Images by Freepik.com & vecteezy.com</span>
    </footer>
  );
}
