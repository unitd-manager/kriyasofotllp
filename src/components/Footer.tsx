import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1">
            <div className="mb-1 mt-0">
              <img src={logo} alt="KriyaSoft LLP" className="h-28 w-46" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              Enterprise technology services for scale-up companies and global enterprises.
            </p>
          </div>

          {[
            {
              heading: 'Services',
              links: ['Cloud Architecture', 'Software Engineering', 'AI & ML', 'Cybersecurity', 'Data Engineering'],
            },
            {
              heading: 'Company',
              links: ['home', 'services', 'About Us', 'Contact'],
            },
            {
              heading: 'Legal',
              links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-white text-sm font-medium mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} KriyaSoft LLP. All rights reserved.
          </p>
          {/*<p className="text-slate-700 text-xs">Built for engineers, by engineers.</p>*/}
        </div>
      </div>
    </footer>
  );
}