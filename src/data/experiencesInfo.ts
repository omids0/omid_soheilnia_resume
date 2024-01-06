enum CompaniesNameList {
  AsiaTech = "asiaTech",
  Pelazio = "pelazio",
  Pspexpress = "pspexpress",
  entekhabElectronic = "entekhabElectronic",
}

type CompanyInfo = {
  name: string;
  start: string;
  end: string;
  skills: string;
  description: string;
  scope: string;
};

type CompaniesList = Record<CompaniesNameList, CompanyInfo>;

type ExperiencesInfo = {
  fa: CompaniesList[];
};

const experiencesInfo: ExperiencesInfo = {
  fa: [
    {
      asiaTech: {
        name: "",
        start: "",
        end: "",
        description: "",
        scope: "",
        skills: "",
      },
      pelazio: {
        name: "",
        start: "",
        end: "",
        description: "",
        scope: "",
        skills: "",
      },
      pspexpress: {
        name: "",
        start: "",
        end: "",
        description: "",
        scope: "",
        skills: "",
      },
      entekhabElectronic: {
        name: "",
        start: "",
        end: "",
        description: "",
        scope: "",
        skills: "",
      },
    },
  ],
};
