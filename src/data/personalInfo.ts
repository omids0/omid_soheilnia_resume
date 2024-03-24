type ListOfInfo = {
  photo: string;
  firstName: string;
  lastName: string;
  bornYear: string;
  country: string;
  city: string;
  birthDate: string;
  blood: string;
  hand: string;
  job: string;
  militaryServiceStatus: string;
  aboutMe: string;
  education: string;
};

type PersonalInfo = {
  fa: ListOfInfo;
  en: ListOfInfo;
};

export const personalInfo: PersonalInfo = {
  fa: {
    photo: "/omidSoheilnia.jpg",
    firstName: "امید",
    lastName: "سهیل نیا",
    bornYear: "1372",
    country: "ایران",
    city: "تهران",
    birthDate: "1994-02-20",
    blood: "",
    hand: "r",
    job: "Front-End Developer",
    militaryServiceStatus: "پایان خدمت",
    education: "لیسانس فناوری اطلاعات",
    aboutMe: `توسعه دهنده Front-End با علاقه به ایجاد رابط های کاربر محور.
  
    من با درک عمیق از فناوری های وب و تعهد به دسترسی، تلاش می کنم تا تجربیات کاربر جذاب و بصری ایجاد کنم. با نگاه دقیق به جزئیات و تمرکز بر عملکرد، من به ارائه کد با کیفیت بالا که نیازهای کاربران و مشاغل را برآورده می کند، اختصاص داده شده ام.
    در اوقات فراغت خود، از مشارکت در پروژه های منبع باز و به روز ماندن در مورد آخرین روندهای توسعه فرانت اند لذت می برم. من همیشه مشتاق یادگیری چیزهای جدید و به اشتراک گذاشتن دانش خود با دیگران هستم.
    من مطمئن هستم که مهارت ها و تجربه ای را دارم که بتوانم یک دارایی ارزشمند برای هر تیمی باشم. من فردی سخت کوش هستم و همیشه حاضرم برای انجام کار تلاش بیشتری انجام دهم.
    اگر به دنبال توسعه‌دهنده‌ای هستید که علاقه‌مند به کار خود باشد، توصیه می‌کنم با من تماس بگیرید. خوشحال می شوم در مورد پروژه شما با جزئیات بیشتری صحبت کنم.`,
  },
  en: {
    photo: "/omidSoheilnia.jpg",
    firstName: "Omid",
    lastName: "SoheilNia",
    bornYear: "1994",
    country: "Iran",
    city: "Tehran",
    birthDate: "1994-02-20",
    blood: "",
    hand: "r",
    job: "Front-End Developer",
    militaryServiceStatus: "Complited",
    education: "B.S. in IT from IAU, Parand Branch (2012 - 2016)",
    aboutMe: `Front-End Developer with a passion for crafting user-centric interfaces.

    Driven by a deep understanding of web technologies and a commitment to accessibility, I strive to create engaging and intuitive user experiences. With a keen eye for detail and a focus on performance, I am dedicated to delivering high-quality code that meets the needs of both users and businesses.
    
    In my spare time, I enjoy contributing to open source projects and staying up-to-date on the latest trends in front-end development. I am always eager to learn new things and share my knowledge with others.
    
    I am confident that I have the skills and experience to be a valuable asset to any team. I am a hard worker and I am always willing to go the extra mile to get the job done.
    
    If you are looking for a front-end developer who is passionate about their work, I encourage you to contact me. I would be happy to discuss your project in more detail.`,
  },
};
