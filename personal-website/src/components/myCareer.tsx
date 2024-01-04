// 定义 Header 组件的属性类型
interface HeaderProps {
    title: string;
  }
  
  // Header 组件
  const Header: React.FC<HeaderProps> = ({ title }) => (
    <header className="bg-black text-white p-8">
      <div className="ml-3 md:ml-0">
            <p className="text-red-500 text-xl font-bold ">BACKGROUND</p>
            <h2 className="text-4xl md:mb-4">{title}</h2>
        </div>
    </header>
  );
  
  // 定义 CareerItem 组件的属性类型
  interface CareerItemProps {
    role: string;
    dateRange: string;
    company: string;
    description: string;
  }
  
  // CareerItem 组件
  const CareerItem: React.FC<CareerItemProps> = ({ role, dateRange, company, description }) => (
    <div className="border-l-4 border-red-500 pl-4 mb-6">
      <h3 className="text-xl text-red-500 font-bold mt-2">{role}</h3>
      <p className="text-gray-500">{dateRange}</p>
      <p className="font-bold">{company}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
  
  // CareerSection 组件，不需要特定的属性
  const CareerSection: React.FC<{children:React.ReactNode}> = ({ children }) => (
    <section className="p-8">
      {children}
    </section>
  );
  
  // 页面组件
  const CareerPage: React.FC = () => (
    <div className="career-page min-h-screen bg-black text-white">
        <div className="flex flex-col  max-w-5xl mx-auto min-h-screen">
            <Header title="My Career" />
            <CareerSection>
                <CareerItem 
                    role="Software Engineer"
                    dateRange="03-2022 - 11-2022"
                    company="Anti Chaos Solutions Pty Ltd."
                    description="Developer Python scripts using Lexis Affinity to enhance automation efficiency for managing customer needs, mass mailing, contract changes, and document processing."
                    /> 
            </CareerSection>
        </div>
    </div>
  );
  
  // App 组件，作为应用程序的根组件
  export const MyCareer: React.FC = () => (
    <div>
      <CareerPage />
    </div>
  );
  