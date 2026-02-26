import ialdfLogo from "@/assets/ialdf-logo.png";

const EmailTemplate = () => {
  return (
    <div className="min-h-screen bg-email-bg py-8 px-4 font-sans">
      <div className="mx-auto max-w-[640px]">
        {/* Email Container */}
        <div className="overflow-hidden rounded-lg shadow-xl">
          {/* Top Header - Clean */}
          <div className="bg-email-header-bg px-8 py-8 text-center">
            <h1 className="text-3xl font-bold tracking-wider text-email-header-fg font-serif">
              IALDF
            </h1>
            <p className="mt-1 text-xs tracking-[0.3em] uppercase text-email-header-fg/60">
              Iranian American Legal Defense Fund
            </p>
          </div>

          {/* Hero Banner */}
          <div
            className="relative bg-email-header-bg px-8 py-12 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(to bottom, hsl(187 55% 14%), hsl(187 55% 8%))",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <div className="relative z-10">
              <p className="text-xs tracking-[0.35em] uppercase text-email-accent font-semibold mb-4">
                Introducing
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-email-header-fg font-serif leading-tight">
                America's Missed{" "}
                <span className="italic text-email-accent">Opportunity</span>
              </h2>
            </div>
          </div>

          {/* Body */}
          <div className="bg-email-card px-8 py-10 text-email-text leading-relaxed">
            <p className="mb-4">
              Greetings from the Iranian American Legal Defense Fund,
            </p>

            <p className="mb-6 text-email-muted">
              We are reaching out today because your experience, your expertise,
              and your voice matter deeply to the work we are doing on behalf of
              our community. This email is part of ongoing communications from
              IALDF regarding visa denials by the United States.
            </p>

            {/* Divider */}
            <div className="flex justify-center my-8">
              <div className="w-12 h-0.5 bg-email-accent rounded-full" />
            </div>

            {/* Section: Reflection */}
            <div className="text-center mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-email-text font-serif italic">
                A Moment of Reflection
              </h2>
              <p className="text-email-muted text-sm leading-relaxed max-w-lg mx-auto">
                Before we share what lies ahead, we pause to honor the students,
                families, and community members who have been killed, injured, or
                detained during the recent uprising in Iran. We carry this grief
                alongside you.
              </p>
              <p className="mt-4 text-email-muted/70 text-xs max-w-lg mx-auto">
                If you would like to honor someone through this initiative,
                please reach out — we would be privileged to help tell their
                story.
              </p>
            </div>

            {/* Divider line */}
            <div className="border-t border-email-border my-8" />

            {/* Section: AMO Introduction */}
            <p className="mb-4 text-sm text-email-muted">
              We are writing to let you know that later this week, IALDF will be
              sending a comprehensive survey to Iranian students who have been
              accepted to academic programs in the United States. We encourage
              you to watch for this email and the follow-up communications that
              will accompany it.
            </p>
            <p className="mb-4 text-sm text-email-muted">
              This survey is the cornerstone of our flagship initiative:{" "}
              <strong className="text-email-text">
                America's Missed Opportunity (AMO)
              </strong>{" "}
              — a project designed to document and bring national attention to
              the far-reaching consequences of restrictive U.S. immigration
              policies on the Iranian diaspora and on American society as a
              whole.
            </p>
            <p className="mb-6 text-sm text-email-muted">
              The premise is straightforward: when the United States denies visas
              to some of the world's most talented researchers, physicians,
              engineers, and scholars, the loss is not Iran's alone — it is
              America's.
            </p>

            {/* Divider line */}
            <div className="border-t border-email-border my-8" />

            {/* Section: What AMO Will Accomplish */}
            <div className="text-center mb-6">
              <h2 className="mb-3 text-2xl font-semibold text-email-text font-serif">
                What AMO Will Accomplish
              </h2>
              <p className="text-sm text-email-muted">
                The AMO project has two core components:
              </p>
            </div>

            <div className="mb-6 space-y-3">
              <div className="rounded-lg bg-email-bg p-5 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-email-accent/15 text-email-accent text-lg">
                  📋
                </span>
                <div>
                  <p className="text-sm font-semibold text-email-text mb-1">
                    1. Comprehensive Surveys
                  </p>
                  <p className="text-xs text-email-muted">
                    Surveys of Iranian nationals who have faced visa denials, as
                    well as the U.S. professors and institutions prepared to
                    welcome them.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-email-bg p-5 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-email-accent/15 text-email-accent text-lg">
                  📊
                </span>
                <div>
                  <p className="text-sm font-semibold text-email-text mb-1">
                    2. Policy Report
                  </p>
                  <p className="text-xs text-email-muted">
                    A comprehensive policy report that integrates our survey
                    findings with national data to build an evidence-based case
                    for reform.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-4 text-sm text-email-muted">
              The survey will gather both quantitative data — such as
              educational background, field of study, target institutions, and
              visa history — and qualitative narratives that capture
              respondents' professional aspirations, research contributions, and
              the personal toll of exclusion.
            </p>
            <p className="mb-6 text-sm text-email-muted">
              Together, these data and stories will form the evidentiary and
              deeply human foundation of the AMO report.
            </p>

            {/* Divider line */}
            <div className="border-t border-email-border my-8" />

            {/* Section: Why This Matters */}
            <div className="text-center mb-6">
              <h2 className="mb-3 text-2xl font-semibold text-email-text font-serif">
                Why This Matters
              </h2>
            </div>
            <p className="mb-4 text-sm text-email-muted">
              At a time when American universities and industries face an urgent
              need for talent, innovation, and global collaboration, excluding
              one of the most academically accomplished and civically engaged
              immigrant communities is not only unjust — it is self-defeating.
            </p>
            <p className="mb-6 text-sm text-email-muted">
              Through AMO, IALDF aims to reframe Iranian immigration not as a
              security concern, but as a national asset — and to remind
              policymakers and the public of what is truly lost when ideology
              overrides opportunity.
            </p>

            {/* Divider line */}
            <div className="border-t border-email-border my-8" />

            {/* Section: Privacy */}
            <div className="rounded-lg border border-email-border bg-email-bg p-6">
              <h2 className="mb-4 text-xl font-semibold text-email-text font-serif text-center">
                🔒 Your Privacy Is Our Priority
              </h2>
              <p className="mb-4 text-sm text-email-muted text-center">
                If you choose to participate, your privacy and security are fully
                protected:
              </p>
              <ul className="space-y-3 text-sm text-email-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-email-accent">✓</span>
                  You will receive a detailed overview of how your data will be
                  used and your rights as a participant.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-email-accent">✓</span>
                  You may participate entirely anonymously — no Personally
                  Identifiable Information will appear in the AMO report without
                  your explicit consent.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-email-accent">✓</span>
                  Your name will not be published unless you give written
                  permission.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-email-accent">✓</span>
                  Your photo will not be published unless you give written
                  permission.
                </li>
              </ul>
            </div>

            {/* Divider line */}
            <div className="border-t border-email-border my-8" />

            {/* Section: What to Expect */}
            <div className="text-center mb-6">
              <h2 className="mb-3 text-2xl font-semibold text-email-text font-serif">
                What to Expect Next
              </h2>
            </div>
            <p className="mb-4 text-sm text-email-muted">
              In the coming days, you will receive a follow-up email containing
              the AMO survey along with a full explanation of your participation
              rights. We ask only that you keep an eye on your inbox — and
              consider lending your voice to this effort.
            </p>
            <p className="mb-6 text-sm text-email-muted">
              If you have any questions, comments, or concerns in the meantime,
              please do not hesitate to contact us. We are here for you.
            </p>

            {/* Call to action block */}
            <div className="my-8 rounded-lg bg-email-header-bg p-8 text-center text-email-header-fg">
              <p className="mb-4 text-lg font-medium font-serif leading-relaxed">
                We stand united in protecting our rights, confronting
                discrimination, and ensuring equal opportunity for every member
                of our community.
              </p>
              <p className="mb-6 text-sm opacity-80">
                When the rights of Iranian Americans are challenged, we take
                action — advocating in the courts, supporting those in need, and
                building a stronger, more resilient future together.
              </p>
              <p className="text-base font-semibold italic text-email-accent">
                Join us in shaping a future where every Iranian American can
                thrive — free from discrimination and full of opportunity.
              </p>
            </div>

            {/* Sign-off */}
            <div className="mt-8 border-t border-email-border pt-6 text-center">
              <p className="mb-1 text-email-muted text-sm">
                With gratitude and solidarity,
              </p>
              <p className="text-lg font-bold font-serif">The IALDF Team</p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-email-header-bg px-8 py-6 text-center">
            <a
              href="https://www.ialdf.org"
              className="text-sm font-medium text-email-accent hover:underline"
            >
              www.ialdf.org
            </a>
            <p className="mt-2 text-xs text-email-header-fg opacity-50">
              © {new Date().getFullYear()} Iranian American Legal Defense Fund.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
