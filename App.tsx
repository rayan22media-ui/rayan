import React from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CartItem as Footer } from './components/CartItem';
import { SKILL_CATEGORIES, PROJECTS, SOCIAL_LINKS } from './constants';
import type { Project, SkillCategory } from './types';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <Header />
      
      <main className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-right">
          <h1 className="text-lg md:text-xl font-mono text-cyan-400 mb-4">مرحبًا، أنا</h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-100">
            محمد.
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-400 mt-2">
            أبني حلولًا للمستقبل.
          </h3>
          <p className="mt-6 max-w-xl text-slate-400 text-lg">
            مبرمج متخصص وخبير تقني، أملك سنوات من الخبرة في تحويل الأفكار المعقدة إلى واقع رقمي ملموس. أبحث دائمًا عن التحديات الجديدة لبناء تطبيقات قوية وأنيقة.
          </p>
          <a href="#contact" className="mt-8 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-md font-bold text-lg hover:bg-cyan-400/10 transition-colors duration-300">
            تواصل معي
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 relative inline-block">
            <span className="font-mono text-cyan-400 text-2xl mr-2">01.</span>
            نبذة عني
            <span className="block h-0.5 w-full bg-cyan-400/50 mt-2"></span>
          </h2>
          <div className="text-slate-400 text-lg space-y-4 max-w-3xl">
            <p>
              مرحبًا! أنا محمد، مبرمج شغوف بخبرة تمتد لسنوات في عالم تطوير الويب. أؤمن بأن التكنولوجيا هي الأداة الأقوى لحل المشكلات المعقدة، وأكرس وقتي لبناء تطبيقات ليست فقط قوية من الناحية التقنية، بل تتميز أيضًا بتجربة مستخدم سلسة وممتعة.
            </p>
            <p>
              من الواجهات الأمامية التفاعلية إلى الأنظمة الخلفية القوية، أستمتع بكل مرحلة من مراحل التطوير وأسعى دائمًا لتعلم أحدث التقنيات لتقديم أفضل الحلول الممكنة.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 relative inline-block">
            <span className="font-mono text-cyan-400 text-2xl mr-2">02.</span>
            المهارات التقنية
            <span className="block h-0.5 w-full bg-cyan-400/50 mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category: SkillCategory) => (
              <div key={category.title} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-400/50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
                <ul className="space-y-2 font-mono text-slate-400">
                  {category.skills.map(skill => <li key={skill}>- {skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 relative inline-block">
            <span className="font-mono text-cyan-400 text-2xl mr-2">03.</span>
            أبرز المشاريع
            <span className="block h-0.5 w-full bg-cyan-400/50 mt-2"></span>
          </h2>
          <div className="space-y-12">
            {PROJECTS.map((project: Project) => (
              <ProductCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
             <span className="font-mono text-cyan-400 text-2xl mr-2">04.</span>
            ماذا بعد؟
          </h2>
           <h3 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">تواصل معي</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            سواء كان لديك سؤال، فرصة عمل، أو مجرد فكرة تود مناقشتها، فلا تتردد في التواصل. أنا دائمًا منفتح على استكشاف آفاق جديدة.
          </p>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="px-8 py-4 bg-cyan-400 text-slate-900 rounded-md font-bold text-lg hover:bg-cyan-300 transition-colors duration-300">
            أرسل رسالة
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;