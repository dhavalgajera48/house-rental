
function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer class="footer footer-center shadow border-2 p-4 bg-base-100 text-base-content">
            <div>
                <p>Copyright © {footerYear} - All right reserved by XYZ Ltd</p>
            </div>
        </footer>
    )
}

export default Footer
