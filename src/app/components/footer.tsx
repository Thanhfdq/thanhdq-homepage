export default function Footer() {
    return (
        <footer className="w-full border-t bg-white text-center dark:bg-gray-900 dark:text-gray-300">
            <div className="mx-auto w-full max-w-4xl p-4 text-sm">
                © {new Date().getFullYear()} Đồng Quốc Thành · Built with Next.js
            </div>
        </footer>
    );
}