import React from 'react';

const Footer = () => {
    return (
        <footer className="py-10 text-gray-400 bg-black">
            <div className="max-w-5xl px-4 mx-auto">
                <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                    {/* Column 1 */}
                    <div className="space-y-2">
                        <a href="#" className="block hover:underline">FAQ</a>
                        <a href="#" className="block hover:underline">Investor Relations</a>
                        <a href="#" className="block hover:underline">Ways to Watch</a>
                        <a href="#" className="block hover:underline">Corporate Information</a>
                        <a href="#" className="block hover:underline">Netflix Originals</a>
                    </div>
                    {/* Column 2 */}
                    <div className="space-y-2">
                        <a href="#" className="block hover:underline">Help Center</a>
                        <a href="#" className="block hover:underline">Jobs</a>
                        <a href="#" className="block hover:underline">Terms of Use</a>
                        <a href="#" className="block hover:underline">Privacy</a>
                        <a href="#" className="block hover:underline">Contact Us</a>
                    </div>
                    {/* Column 3 */}
                    <div className="space-y-2">
                        <a href="#" className="block hover:underline">Account</a>
                        <a href="#" className="block hover:underline">Redeem Gift Cards</a>
                        <a href="#" className="block hover:underline">Privacy</a>
                        <a href="#" className="block hover:underline">Speed Test</a>
                    </div>
                    {/* Column 4 */}
                    <div className="space-y-2">
                        <a href="#" className="block hover:underline">Media Center</a>
                        <a href="#" className="block hover:underline">Buy Gift Cards</a>
                        <a href="#" className="block hover:underline">Cookie Preferences</a>
                        <a href="#" className="block hover:underline">Legal Notices</a>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="mt-8 text-sm text-center text-gray-500">
                    <button className="px-4 py-1 mb-4 border border-gray-500">Service Code</button>
                    <p>© 2023 Netflix, Inc.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
