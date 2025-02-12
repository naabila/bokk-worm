import React from "react";
import Icon from "../assets/lesson.gif"
const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: GIF */}
        <div className="flex justify-center">
          <img
            src={Icon}
            alt="FAQ GIF"
            className="max-w-md h-auto rounded-lg"
          />
        </div>

        {/* Right Column: FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-medium">
                How do I register for a library account?
              </div>
              <div className="collapse-content">
                <p>You can register by clicking the "Sign Up" button on the homepage. Fill in your details and verify your email to activate your account.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                How can I borrow books from the library?
              </div>
              <div className="collapse-content">
                <p>Once logged in, browse the book catalog, select a book, and click the "Borrow" button. You can then pick up the book from the library or read it online (if available).</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                What happens if I return a book late?
              </div>
              <div className="collapse-content">
                <p>If you return a book after the due date, a small late fee may apply based on the library’s policy. You can check your fines in the Dashboard section.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                Can I renew a borrowed book?
              </div>
              <div className="collapse-content">
                <p>Yes! You can extend the borrowing period before the due date by clicking the "Renew" button in your account, provided there are no pending requests for the book.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                How do I check my borrowing history?
              </div>
              <div className="collapse-content">
                <p>Log in to your account and go to the "My Borrowed Books" section. Here, you can see your borrowing history, due dates, and fines (if any).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
