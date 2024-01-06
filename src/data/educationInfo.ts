enum Grads {
  University = "university",
}

type GradDetails = {
  field: string;
  start: string;
  end: string;
};

type EducationInfo = {
  fa: Record<Grads, GradDetails>;
};

const educationInfo: EducationInfo = {
  fa: {
    university: {
      field: "",
      start: "",
      end: "",
    },
  },
};
