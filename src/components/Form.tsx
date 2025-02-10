"use client";

import { supabase } from "../lib/supabase";

const FormClient = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const { error } = await supabase.from("responses").insert({
        names: formData.get("name"),
        song: formData.get("song"),
      });
      if (error) throw error;
      console.log("Form submitted successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-brown flex flex-col justify-center p-12 space-y-12"
    >
      <label className="text-brown text-3xl flex flex-col">
        Who will be attending?
        <input
          name="name"
          placeholder="Enter Names of Guests"
          className="text-brown text-xl placeholder-brown bg-inherit border-b my-4"
        />
      </label>
      <label className="text-brown text-3xl flex flex-col">
        I can&apos;t help but dance when I hear this song:
        <input
          name="song"
          placeholder="Enter song name"
          className="text-brown text-xl placeholder-brown bg-inherit border-b my-4"
        />
      </label>
      <button
        type="submit"
        className="bg-brown text-white text-2xl py-2 px-4 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default FormClient;
