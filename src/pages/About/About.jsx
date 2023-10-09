
import Shipping from "../../components/Shipping/Shipping";

const About = () => {

    return (
        <div className="px-4 md:px-2 lg:px-10 xl:px-20 py-10">
            <div className="about-page">
                <div className="about-header">
                <h1 className="text-3xl font-bold" data-aos="fade-up">Welcome to Bike Universe X</h1>
                </div>
                <div className="about-content mt-4">
                <h2 className="text-2xl font-semibold" data-aos="fade-up">Our Story</h2>
                <p className="mt-2" data-aos="fade-up">
                    Bike Universe X is your one-stop destination for all things related to biking. Founded in [2023], we are passionate about bikes and [briefly explain your mission and values].

                    Founder/Team Information:

                    Provide brief bios or information about the founder(s) or key members of your team. Highlight their expertise or passion for bikes.
                    Website History:

                    Explain how and why Bike Universe X was founded. Share any interesting milestones or stories related to the website's history.
                    Mission and Values:

                    Outline the core values and mission of your website. What do you aim to achieve, and what sets you apart from others in the biking community?
                    Content Focus:

                    Describe the type of content visitors can expect to find on your website. Is it focused on bike reviews, industry news, events, or something else?
                    Community Engagement:

                    If applicable, mention any community or social initiatives you're involved in, such as charity rides or bike-related events.
                    Contact Information:

                    Provide contact details for users who may want to get in touch with questions or collaborations. This can include an email address or a contact form.
                    Social Media Links:

                    Include links to your social media profiles to encourage visitors to follow your updates and engage with your community.
                    Testimonials or Reviews:

                    If you have received positive feedback or reviews from users or partners, consider including them on this page to build trust.
                    Photos or Visuals:

                    Add relevant images or graphics to make the page visually appealing. This could include photos of bikes, events, or your team.
                    Call to Action (CTA):

                    End the page with a clear CTA, such as inviting users to explore your latest articles, subscribe to a newsletter, or follow you on social media.
                    Updates:
                </p>
                </div>
            </div>
            <div className="bg-green-400 mt-10" data-aos="fade-up">
            <Shipping></Shipping>
            </div>
        </div>
    );
};

export default About;