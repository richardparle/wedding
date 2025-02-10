const Questions = () => {
  const questions = [
    {
      id: 1,
      question: "Will the ceremony be outside?",
      answer:
        "Yes! Providing the weather on the day is good! With this in mind please wear comfortable shoes, suitable for a forest. There is an indoor area if required.",
    },
    {
      id: 2,
      question: "Are children allowed at the wedding?",
      answer: "This is an adult only event.",
    },
    {
      id: 3,
      question: "Can I take photos during the ceremony?",
      answer: "We kindly ask that you do not take photos during the ceremony.",
    },
    {
      id: 4,
      question: "Will there be parking available?",
      answer: "Yes! There is plenty of parking available at the venue.",
    },
    {
      id: 5,
      question: "What food will be there?",
      answer:
        "The wedding breakfast will be a barbeque, and the late night food will be loaded fries. There are vegetarian options for both meals.",
    },
  ];
  return (
    <section className="text-brown flex flex-col justify-center p-12 space-y-12">
      {questions.map((question) => (
        <div key={question.id} className="w-full mt-6">
          <h2 className="text-2xl mb-2">{question.question}</h2>
          <p>{question.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default Questions;
