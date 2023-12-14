const Footer = () => {
    const footerHeadingStyle = "font-semibold text-xl";
    return (
        <footer className="bg-gray-800 text-white p-10 mt-10 w-full">
            <div className="container mx-auto md:h-64 flex flex-col md:flex-row md:justify-around space-y-4 md:space-y-0">
                <div className="footer-row1">
                    <div className="w-80">
                        <p>Company details Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias soluta neque, iste amet dolorem deserunt eaque hic, a provident impedit eligendi</p>
                    </div>
                </div>
                <div className="footer-row2 space-y-4">
                    <h2 className={footerHeadingStyle}>Company</h2>
                    <ul className="space-y-4">
                        <li>Abous us</li>
                        <li>Terms & Condition</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-row3 space-y-4">
                    <h2 className={footerHeadingStyle}>Quick Links</h2>
                    <ul className="space-y-4">
                        <li>Book instructor</li>
                        <li>Become an instrutor</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                <div className="footer-row4 space-y-4">
                    <h2 className={footerHeadingStyle}>Contact us</h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
// import React, { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-800 text-white p-6">
//       <div className="container mx-auto">
//         <div className="footer-row">Row 1 Text</div>
//         <div className="footer-row">Row 2 Text</div>
//         <div className="footer-row">Row 3 Text</div>
//       </div>
//     </footer>
//   );
// }

// const mainFooter: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow">{children}</div>
//       <Footer />
//     </div>
//   );
// }

// export default mainFooter;


