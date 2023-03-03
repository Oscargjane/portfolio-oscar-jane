'use client';

export default function ContactPage() {
  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    return formData;
  }

  return (
    <section>
      <h1 className="font-bold text-3xl">Contact Me</h1>
      <p className="my-5">
        Have a project, idea or opportunity you&apos;d like to discuss? Or just
        want to connect?
      </p>
      <form method="POST" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-5 mt-12 text-base">
          <div className="flex gap-5">
            <label className="basis-1/2 flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all">
              Name
              <input
                type="text"
                name="fullName"
                placeholder="Your entire name"
                className="max-h-12 mt-1 p-4 text-sm text-neutral-800 border border-neutral-500 rounded-lg focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all"
              />
            </label>
            <label className="basis-1/2 flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all">
              Email
              <input
                type="email"
                name="emailAddress"
                placeholder="Your email address"
                className="max-h-12 mt-1 p-4 text-sm text-neutral-800 border border-neutral-500 rounded-lg focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all"
              />
            </label>
          </div>
          <label className="basis-1/2 flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all">
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="max-h-12 mt-1 p-4 text-sm text-neutral-800 border border-neutral-500 rounded-lg focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all"
            />
          </label>
          <label className="flex flex-col font-medium text-neutral-500 focus-within:text-neutral-800 transition-all">
            Message
            <textarea
              name="message"
              placeholder="Your message..."
              required
              rows="10"
              className="max-h-48 mt-1 p-4 rounded-lg border border-neutral-500 focus:outline-none focus:ring-0 focus:ring-neutral-500 transition-all"
            />
          </label>
          <button
            type="submit"
            className="w-1/3 mt-5 px-2.5 py-3.5 self-center rounded-lg text-white bg-neutral-800 cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
