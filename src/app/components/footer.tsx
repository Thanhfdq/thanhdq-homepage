export default function Footer() {
    return (
        <footer className="w-full border-t text-center text-foreground bg-background">
            <div className="mx-auto w-full max-w-4xl p-4 text-sm">
                © {new Date().getFullYear()} Đồng Quốc Thành · Built with Next.js
            </div>
        </footer>
    );
}