
function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer footer-center shadow shadow-gray-600 border-2 p-4 bg-base-100 text-base-content">
            <div>
                <p>Copyright © {footerYear} - All right reserved by XYZ Ltd</p>
            </div>
        </footer>
    )
}

export default Footer
