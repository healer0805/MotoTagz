import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faDownload,
  faCirclePlay,
  faCheckCircle,
  faBell,
  faAmbulance,
  faLocationDot,
  faUserGroup,
  faMotorcycle,
  faClock,
  faPhoneVolume,
  faInfoCircle,
  faCog,
  faBrain,
  faPaperPlane,
  faCommentSms,
  faIdCard,
  faNotesMedical,
  faUser,
  faShieldAlt,
  faArrowRight,
  faExclamationTriangle,
  faLocationArrow,
  faUsers,
  faVolumeUp,
  faBatteryFull,
  faMobileScreen,
  faPlusCircle,
  faMapMarkedAlt,
  faRoute,
  faSignal,
  faCoffee,
  faPauseCircle,
  faRoad,
  faEllipsisV,
  faComments,
  faGlobe,
  faCalendarCheck,
  faCalendarPlus,
  faCircle,
  faEnvelope,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <section className="code-section relative bg-gradient-to-br from-[var(--dark-background-color)] to-[var(--primary-color)] text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/homeBg.jfif"
            alt="Motorcycle rider on road"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column: text */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center bg-[var(--primary-color)] text-[var(--dark-text-color)] px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse gap-2">
                <FontAwesomeIcon className="text-[var(--dark-text-color)]" icon={faShieldHalved} aria-hidden />
                First-of-Its-Kind Motorcycle Protection
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ride Confident. We&apos;ve Got Your Back If You Go Down.
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed">
                Automatic crash detection and emergency response for motorcycle riders. Help
                arrives even when you can&apos;t call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a
                  href="#download"
                  className="bg-[var(--primary-color)] text-[var(--dark-text-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <FontAwesomeIcon icon={faDownload} className="w-5 h-5 shrink-0 " aria-hidden />
                  Get MotoTagz Now
                </a>
                <a
                  href="/how-it-works"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/40 flex items-center justify-center gap-3"
                >
                  <FontAwesomeIcon icon={faCirclePlay} className="w-5 h-5 shrink-0" aria-hidden />
                  See How It Works
                </a>
              </div>
              <p className="text-sm text-gray-300 flex items-center justify-center lg:justify-start gap-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--primary-color)] shrink-0 rounded-full p-1" aria-hidden />
                No subscription fees during beta • Available for iOS &amp; Android
              </p>
            </div>

            {/* Right column: feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: 'bell', title: 'Instant Detection', desc: 'Automatically senses when you crash in seconds' },
                { icon: 'ambulance', title: 'Auto Emergency Call', desc: "911 contacted automatically if you're unresponsive" },
                { icon: 'location', title: 'GPS Location', desc: 'Your exact location sent to first responders' },
                { icon: 'contacts', title: 'Emergency Contacts', desc: 'Loved ones notified immediately with details' },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  <div className="bg-[var(--primary-color)] w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[var(--primary-button-text-color)]">
                    <FontAwesomeIcon
                      icon={
                        icon === 'bell'
                          ? faBell
                          : icon === 'ambulance'
                            ? faAmbulance
                            : icon === 'location'
                              ? faLocationDot
                              : faUserGroup
                      }
                      className="text-2xl text-[var(--dark-text-color)]"
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
                  <p className="text-gray-200 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white" />
          </svg>
        </div>
      </section>
      {/* How MotoTagz Protects You */}
      <section className="code-section bg-white py-16 sm:py-24" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-4">
              How MotoTagz Protects You
            </h2>
            <p className="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto">
              Three simple steps between your crash and help arriving. No buttons to
              press, no calls to make.
            </p>
          </div>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] via-[var(--accent2-color)] to-[var(--accent-color)] z-0"
              style={{ top: '180px', transform: 'translateY(-50%)' }}
              aria-hidden
            />
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-[var(--accent-color)] rounded-full animate-ping opacity-20" aria-hidden />
                  <FontAwesomeIcon icon={faMotorcycle} className="text-5xl text-white relative z-10" aria-hidden />
                </div>
                <div className="bg-[var(--primary-color)] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark-text-color)] mb-3">
                  Crash Detected
                </h3>
                <p className="text-[var(--gray-text-color)] text-lg leading-relaxed">
                  Advanced sensors detect sudden impact, speed changes, and phone
                  orientation automatically. Works in the background while you ride.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-[var(--accent-color)] rounded-full animate-ping opacity-20" aria-hidden />
                  <FontAwesomeIcon icon={faClock} className="text-5xl text-white relative z-10" aria-hidden />
                </div>
                <div className="bg-[var(--accent2-color)] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark-text-color)] mb-3">
                  60-Second Countdown
                </h3>
                <p className="text-[var(--gray-text-color)] text-lg leading-relaxed">
                  Loud alarm and vibration alert you. If it&apos;s a false alarm, simply
                  cancel within 60 seconds. Otherwise, the app proceeds automatically.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-[var(--accent3-color)] rounded-full animate-ping opacity-20" aria-hidden />
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-5xl text-[var(--dark-text-color)] relative z-10" aria-hidden />
                </div>
                <div className="bg-[var(--accent-color)] text-[var(--dark-text-color)] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                  3
                </div>
                <h3 className="text-2xl font-bold text-[var(--dark-text-color)] mb-3">
                  Help Dispatched
                </h3>
                <p className="text-[var(--gray-text-color)] text-lg leading-relaxed">
                  911 is called with your GPS location. Your emergency contacts
                  receive SMS alerts with your exact location and status updates.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-[var(--light-background-color)] px-6 py-3 rounded-full">
              <FontAwesomeIcon icon={faInfoCircle} className="text-[var(--primary-color)]" aria-hidden />
              <span className="text-[var(--dark-text-color)] font-medium">
                Average response time: Under 3 minutes from crash to help arriving
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features That Save Lives */}
      <section className="code-section bg-white py-16 sm:py-24" id="sntop9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--accent-color)] text-[var(--dark-text-color)] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <FontAwesomeIcon icon={faCog} aria-hidden />
              <span>Core Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-4">
              Core Features That Save Lives
            </h2>
            <p className="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto">
              Advanced technology designed specifically for motorcycle riders,
              ensuring help arrives fast when you need it most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Feature 1: Smart Crash Detection */}
            <div className="bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-3xl p-8 lg:p-10 border border-[var(--light-border-color)] shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faBrain} className="text-3xl text-white" aria-hidden />
                </div>
                <div>
                  <span className="text-sm font-bold text-[var(--primary-color)] uppercase tracking-wide">Feature 01</span>
                  <h3 className="text-2xl font-bold text-[var(--dark-text-color)]">
                    Smart Crash Detection
                  </h3>
                </div>
              </div>
              <p className="text-[var(--gray-text-color)] text-lg mb-6 leading-relaxed">
                MotoTagz uses advanced motion and impact detection algorithms tailored
                specifically for motorcycles. When a crash is detected, the app
                quickly evaluates rider movement and responsiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--light-border-color)] shadow-sm">
                  <div className="bg-[var(--accent-color)] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faClock} className="text-[var(--dark-text-color)]" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark-text-color)] mb-1">
                      Automatic Emergency Response
                    </h4>
                    <p className="text-[var(--gray-text-color)] text-sm">
                      If the rider does not respond within a short timeframe, MotoTagz
                      automatically initiates an emergency response.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--light-border-color)] shadow-sm">
                  <div className="bg-[var(--accent2-color)] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark-text-color)] mb-1">
                      Critical Info to 911
                    </h4>
                    <p className="text-[var(--gray-text-color)] text-sm">
                      The app sends your exact GPS location, bike license plate
                      number, and personal description directly to 911 dispatch for
                      rapid response.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[var(--light-border-color)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--gray-text-color)]">Detection Accuracy</span>
                  <span className="font-bold text-[var(--primary-color)]">99.2%</span>
                </div>
                <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-full" style={{ width: '99.2%' }} />
                </div>
              </div>
            </div>

            {/* Feature 2: Emergency Contact Alerts */}
            <div className="bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-3xl p-8 lg:p-10 border border-[var(--light-border-color)] shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faUserGroup} className="text-3xl text-white" aria-hidden />
                </div>
                <div>
                  <span className="text-sm font-bold text-[var(--accent2-color)] uppercase tracking-wide">Feature 02</span>
                  <h3 className="text-2xl font-bold text-[var(--dark-text-color)]">
                    Emergency Contact Alerts
                  </h3>
                </div>
              </div>
              <p className="text-[var(--gray-text-color)] text-lg mb-6 leading-relaxed">
                In addition to contacting emergency services, MotoTagz instantly
                reaches out to your two designated emergency contacts to keep loved
                ones informed.
              </p>
              <div className="bg-white rounded-xl p-5 border border-[var(--light-border-color)] shadow-sm mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[var(--accent3-color)] w-10 h-10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faCommentSms} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark-text-color)]">
                      Automated Text &amp; Call
                    </h4>
                    <p className="text-[var(--gray-text-color)] text-xs">
                      Each contact receives critical information instantly
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon icon={faLocationDot} className="text-[var(--primary-color)] w-5" aria-hidden />
                    <span className="text-[var(--dark-text-color)]">Location coordinates</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon icon={faClock} className="text-[var(--accent2-color)] w-5" aria-hidden />
                    <span className="text-[var(--dark-text-color)]">Time of incident</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon icon={faIdCard} className="text-[var(--accent-color)] w-5" aria-hidden />
                    <span className="text-[var(--dark-text-color)]">Rider&apos;s name &amp; bike details</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon icon={faNotesMedical} className="text-[var(--accent3-color)] w-5" aria-hidden />
                    <span className="text-[var(--dark-text-color)]">Medical information</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 bg-gradient-to-r from-green-50 to-white p-3 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faUser} className="text-white text-xs" aria-hidden />
                    </div>
                    <span className="font-semibold text-sm text-[var(--dark-text-color)]">Contact 1</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <FontAwesomeIcon icon={faCheckCircle} aria-hidden />
                    <span>Notified</span>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-green-50 to-white p-3 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faUser} className="text-white text-xs" aria-hidden />
                    </div>
                    <span className="font-semibold text-sm text-[var(--dark-text-color)]">Contact 2</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <FontAwesomeIcon icon={faCheckCircle} aria-hidden />
                    <span>Notified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[var(--dark-background-color)] to-[var(--primary-color)] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-2xl" aria-hidden />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Complete Protection System</h4>
                  <p className="text-gray-200 text-sm">
                    Both features work together automatically to ensure your safety
                  </p>
                </div>
              </div>
              <a href="/features" className="bg-[var(--accent-color)] text-[var(--dark-text-color)] px-6 py-3 rounded-lg font-bold hover:bg-[var(--accent2-color)] transition-all shadow-lg whitespace-nowrap flex items-center gap-2">
                See All Features <FontAwesomeIcon icon={faArrowRight} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Every Second Matters in a Motorcycle Crash */}
      <section className="code-section bg-gradient-to-b from-[var(--light-background-color)] to-white py-16 sm:py-24" id="s7p1pef">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl blur-2xl opacity-20" aria-hidden />
                <img
                  src="/img/publicContain.jfif"
                  alt="Safety icons with helmet, health, protection symbols representing accident prevention and rider safety"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[var(--accent3-color)] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                <FontAwesomeIcon icon={faExclamationTriangle} aria-hidden />
                Critical Statistics
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6 leading-tight">
                Every Second Matters in a Motorcycle Crash
              </h2>

              <p className="text-xl text-[var(--gray-text-color)] mb-8 leading-relaxed">
                Motorcycle riders are 28x more likely to die in a crash than car
                occupants. When seconds count, MotoTagz ensures help is already on the
                way.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--primary-color)] transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">60%</div>
                  <p className="text-[var(--dark-text-color)] font-medium">
                    of fatal motorcycle crashes happen on rural roads with delayed
                    response times
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--accent2-color)] transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-[var(--accent2-color)] mb-2">10 min</div>
                  <p className="text-[var(--dark-text-color)] font-medium">
                    Average time before someone finds an unconscious rider on remote
                    roads
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--accent-color)] transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-[var(--accent-color)] mb-2">85%</div>
                  <p className="text-[var(--dark-text-color)] font-medium">
                    survival rate when emergency care begins within the first 10
                    minutes
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--accent3-color)] transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-[var(--accent3-color)] mb-2">&lt;3 min</div>
                  <p className="text-[var(--dark-text-color)] font-medium">
                    MotoTagz average time from crash detection to 911 dispatch
                  </p>
                </div>
              </div>

              <div className="bg-[var(--dark-background-color)] text-white p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--accent-color)] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-[var(--dark-text-color)]" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Don&apos;t Ride Alone Anymore</h4>
                    <p className="text-gray-300">
                      MotoTagz is your invisible riding companion, always ready to get
                      you help when it matters most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Features Built for Riders */}
      <section className="code-section bg-white py-16 sm:py-24" id="sl994ke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-4">
              Powerful Features Built for Riders
            </h2>
            <p className="text-xl text-[var(--gray-text-color)] max-w-3xl mx-auto">
              Everything you need for complete peace of mind, engineered specifically
              for the unique challenges of motorcycle riding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-[var(--light-background-color)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[var(--light-border-color)]">
              <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <FontAwesomeIcon icon={faBrain} className="text-3xl text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">Smart Crash Detection</h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">
                Advanced AI algorithms analyze acceleration, gyroscope, and GPS data
                to accurately detect crashes while filtering out false positives from
                normal riding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[var(--light-background-color)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[var(--light-border-color)]">
              <div className="bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <FontAwesomeIcon icon={faLocationArrow} className="text-3xl text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">Precise GPS Location</h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">
                Your exact coordinates are automatically transmitted to 911 and
                emergency contacts, even on remote roads where landmarks don&apos;t exist.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[var(--light-background-color)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[var(--light-border-color)]">
              <div className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <FontAwesomeIcon icon={faUsers} className="text-3xl text-[var(--dark-text-color)]" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">Emergency Contact Network</h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">
                Add unlimited emergency contacts who receive instant SMS alerts with
                your location, crash severity, and real-time status updates.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[var(--light-background-color)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[var(--light-border-color)]">
              <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <FontAwesomeIcon icon={faVolumeUp} className="text-3xl text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">Loud Alert System</h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">
                Maximum volume alarm with vibration ensures you can cancel false
                alarms even with helmet and road noise. Countdown timer gives you full
                control.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[var(--light-background-color)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[var(--light-border-color)]">
              <div className="bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <FontAwesomeIcon icon={faBatteryFull} className="text-3xl text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">Battery Optimized</h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">
                Runs efficiently in the background without draining your phone
                battery. Smart power management for all-day rides and multi-day trips.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[var(--light-background-color)] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[var(--light-border-color)]">
              <div className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <FontAwesomeIcon icon={faMobileScreen} className="text-3xl text-[var(--dark-text-color)]" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[var(--dark-text-color)] mb-3">Works Everywhere</h3>
              <p className="text-[var(--gray-text-color)] leading-relaxed">
                Functions with any cellular connection. No special hardware required –
                just your smartphone. Compatible with iOS and Android devices.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="/features" className="inline-flex items-center gap-3 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span>Explore All Features</span>
              <FontAwesomeIcon icon={faArrowRight} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Group Ride Mode */}
      <section className="code-section bg-gradient-to-br from-[var(--light-background-color)] via-white to-[var(--medium-background-color)] py-16 sm:py-24 overflow-hidden" id="smaq6c">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                <FontAwesomeIcon icon={faUsers} aria-hidden />
                <span>New Feature</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6 leading-tight">
                Group Ride Mode
              </h2>

              <p className="text-xl text-[var(--gray-text-color)] mb-8 leading-relaxed">
                MotoTagz enhances the social side of riding with its built-in Group
                Ride feature. Stay connected and keep your crew safe from start to
                finish.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faPlusCircle} className="text-2xl text-[var(--dark-text-color)]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[var(--dark-text-color)] mb-1">Create &amp; Share Rides</h3>
                    <p className="text-[var(--gray-text-color)]">
                      One rider can create a ride event and easily share it with other
                      riders in the group.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="text-2xl text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[var(--dark-text-color)] mb-1">Real-Time Monitoring</h3>
                    <p className="text-[var(--gray-text-color)]">
                      All participants sign in to the same ride, allowing MotoTagz to
                      monitor each rider&apos;s status and location throughout the trip.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-[var(--accent3-color)] to-[var(--accent2-color)] w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faBell} className="text-2xl text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[var(--dark-text-color)] mb-1">Instant Group Alerts</h3>
                    <p className="text-[var(--gray-text-color)]">
                      If any rider experiences an accident or stops unexpectedly, the
                      rest of the group is instantly notified.
                    </p>
                  </div>
                </div>
              </div>

              <a href="/features" className="inline-flex items-center gap-3 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>Learn More About Group Ride</span>
                <FontAwesomeIcon icon={faArrowRight} aria-hidden />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-3xl blur-3xl opacity-20" aria-hidden />

              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[var(--light-border-color)]">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] rounded-full mb-4 shadow-xl">
                    <FontAwesomeIcon icon={faRoute} className="text-4xl text-white" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--dark-text-color)]">Active Group Ride</h3>
                  <p className="text-[var(--gray-text-color)] text-sm">Sunday Canyon Run • 4 Riders</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faMotorcycle} aria-hidden />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-[var(--dark-text-color)]">Mike (Lead)</div>
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <FontAwesomeIcon icon={faCheckCircle} aria-hidden /> Riding • 45 mph
                      </div>
                    </div>
                    <div className="text-green-500">
                      <FontAwesomeIcon icon={faSignal} aria-hidden />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faMotorcycle} aria-hidden />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-[var(--dark-text-color)]">Sarah</div>
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <FontAwesomeIcon icon={faCheckCircle} aria-hidden /> Riding • 43 mph
                      </div>
                    </div>
                    <div className="text-green-500">
                      <FontAwesomeIcon icon={faSignal} aria-hidden />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faMotorcycle} aria-hidden />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-[var(--dark-text-color)]">Jake</div>
                      <div className="text-sm text-green-600 flex items-center gap-1">
                        <FontAwesomeIcon icon={faCheckCircle} aria-hidden /> Riding • 42 mph
                      </div>
                    </div>
                    <div className="text-green-500">
                      <FontAwesomeIcon icon={faSignal} aria-hidden />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      <FontAwesomeIcon icon={faCoffee} aria-hidden />
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-[var(--dark-text-color)]">Emma</div>
                      <div className="text-sm text-blue-600 flex items-center gap-1">
                        <FontAwesomeIcon icon={faPauseCircle} aria-hidden /> Stopped • Gas Station
                      </div>
                    </div>
                    <div className="text-blue-500">
                      <FontAwesomeIcon icon={faSignal} aria-hidden />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--light-border-color)] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[var(--gray-text-color)]">
                    <FontAwesomeIcon icon={faRoad} className="text-[var(--primary-color)]" aria-hidden />
                    <span>23 miles completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <FontAwesomeIcon icon={faShieldAlt} aria-hidden />
                    <span>All riders safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MotoTagz Community Network Chat */}
      <section className="code-section bg-white py-16 sm:py-24" id="sny8at5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-[var(--accent-color)] via-[var(--accent2-color)] to-[var(--primary-color)] rounded-3xl blur-3xl opacity-20" aria-hidden />

                <div className="relative bg-gradient-to-br from-white to-[var(--light-background-color)] rounded-3xl shadow-2xl border border-[var(--light-border-color)] overflow-hidden">
                  <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--dark-background-color)] text-white p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faUsers} className="text-xl text-[var(--dark-text-color)]" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-bold">MotoTagz Community</h4>
                        <p className="text-xs text-gray-200 flex items-center gap-1">
                          <FontAwesomeIcon icon={faCircle} className="text-green-400 text-xs" aria-hidden />
                          2,847 riders online
                        </p>
                      </div>
                    </div>
                    <FontAwesomeIcon icon={faEllipsisV} aria-hidden />
                  </div>

                  <div className="p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-[400px]">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <FontAwesomeIcon icon={faUser} aria-hidden />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-[var(--dark-text-color)]">RiderMike</span>
                          <span className="text-xs text-[var(--gray-text-color)]">9:42 AM</span>
                        </div>
                        <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm border border-[var(--light-border-color)]">
                          <p className="text-sm text-[var(--dark-text-color)]">Anyone up for a ride through the canyon this weekend? 🏍️</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <FontAwesomeIcon icon={faUser} aria-hidden />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-[var(--dark-text-color)]">SarahR</span>
                          <span className="text-xs text-[var(--gray-text-color)]">9:44 AM</span>
                        </div>
                        <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm border border-[var(--light-border-color)]">
                          <p className="text-sm text-[var(--dark-text-color)]">I&apos;m in! What time are you thinking?</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] rounded-full flex items-center justify-center text-[var(--dark-text-color)] flex-shrink-0">
                        <FontAwesomeIcon icon={faUser} aria-hidden />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-[var(--dark-text-color)]">JakeSpeed</span>
                          <span className="text-xs text-[var(--gray-text-color)]">9:46 AM</span>
                          <span className="bg-[var(--accent-color)] text-[var(--dark-text-color)] text-xs px-2 py-0.5 rounded-full font-bold">Pro</span>
                        </div>
                        <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm border border-[var(--light-border-color)]">
                          <p className="text-sm text-[var(--dark-text-color)]">
                            Count me in! I know a great route with minimal traffic. Let me create a Group Ride event 📍
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--dark-background-color)] text-white px-4 py-2 rounded-full text-xs shadow-md">
                        <FontAwesomeIcon icon={faCalendarPlus} aria-hidden />
                        JakeSpeed created &quot;Sunday Canyon Ride&quot; group event
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <FontAwesomeIcon icon={faUser} aria-hidden />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-[var(--dark-text-color)]">EmmaGo</span>
                          <span className="text-xs text-[var(--gray-text-color)]">9:48 AM</span>
                        </div>
                        <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm border border-[var(--light-border-color)]">
                          <p className="text-sm text-[var(--dark-text-color)]">
                            Perfect! Just signed up. Love that MotoTagz keeps us all connected and safe 🛡️
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border-t border-[var(--light-border-color)]">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-grow bg-gray-100 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                        aria-label="Chat message input"
                      />
                      <button
                        type="button"
                        className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--dark-background-color)] text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                        aria-label="Send message"
                      >
                        <FontAwesomeIcon icon={faPaperPlane} aria-hidden />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[var(--accent2-color)] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                <FontAwesomeIcon icon={faComments} aria-hidden />
                <span>Community Feature</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--dark-text-color)] mb-6 leading-tight">
                MotoTagz Community Network Chat
              </h2>

              <p className="text-xl text-[var(--gray-text-color)] mb-8 leading-relaxed">
                Connect with thousands of riders nationwide. Share routes, plan group
                rides, get tips, and build lasting friendships with fellow motorcycle
                enthusiasts.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-[var(--primary-color)] to-[var(--dark-background-color)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faGlobe} className="text-xl text-white" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--dark-text-color)] mb-1">Nationwide Rider Network</h4>
                    <p className="text-[var(--gray-text-color)]">
                      Connect with riders in your area or across the country. Find riding partners wherever you go.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faRoute} className="text-xl text-white" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--dark-text-color)] mb-1">Share Routes &amp; Tips</h4>
                    <p className="text-[var(--gray-text-color)]">
                      Exchange favorite routes, hidden gems, and riding tips with experienced riders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent2-color)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faCalendarCheck} className="text-xl text-[var(--dark-text-color)]" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--dark-text-color)] mb-1">Organize Events Instantly</h4>
                    <p className="text-[var(--gray-text-color)]">
                      Create group rides directly from chat and invite riders seamlessly with Group Ride Mode.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-xl text-white" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--dark-text-color)] mb-1">Safety-First Community</h4>
                    <p className="text-[var(--gray-text-color)]">
                      All members are MotoTagz users, ensuring everyone rides with protection and accountability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 bg-gradient-to-r from-[var(--light-background-color)] to-white p-6 rounded-2xl border border-[var(--light-border-color)]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-1">10K+</div>
                  <div className="text-xs text-[var(--gray-text-color)]">Active Members</div>
                </div>
                <div className="text-center border-l border-r border-[var(--light-border-color)]">
                  <div className="text-3xl font-bold text-[var(--accent2-color)] mb-1">500+</div>
                  <div className="text-xs text-[var(--gray-text-color)]">Daily Rides Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--accent-color)] mb-1">24/7</div>
                  <div className="text-xs text-[var(--gray-text-color)]">Always Active</div>
                </div>
              </div>

              <a href="/features" className="inline-flex items-center gap-3 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>Join the Community</span>
                <FontAwesomeIcon icon={faArrowRight} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Be First to Ride with MotoTagz */}
      <section className="code-section relative bg-gradient-to-br from-[var(--primary-color)] via-[var(--dark-background-color)] to-[var(--primary-color)] text-white py-16 sm:py-20 overflow-hidden" id="smp4lco">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute top-10 left-20 w-64 h-64 bg-[var(--accent-color)] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[var(--accent2-color)] rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <FontAwesomeIcon icon={faEnvelope} className="absolute top-20 left-10 text-white opacity-10 text-4xl" />
          <FontAwesomeIcon icon={faBell} className="absolute top-40 right-32 text-[var(--accent-color)] opacity-20 text-3xl" />
          <FontAwesomeIcon icon={faMotorcycle} className="absolute bottom-32 left-1/4 text-white opacity-10 text-5xl" />
          <FontAwesomeIcon icon={faMobileScreen} className="absolute bottom-20 right-20 text-[var(--accent-color)] opacity-20 text-4xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--accent-color)] rounded-full shadow-2xl">
              <FontAwesomeIcon icon={faRocket} className="text-4xl text-[var(--dark-text-color)]" aria-hidden />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Be First to Ride with MotoTagz
          </h2>

          <p className="text-xl sm:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Stay updated on the official app launch, exclusive beta access, and
            special early-bird offers.
          </p>

          <form className="max-w-2xl mx-auto mb-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 rounded-lg text-[var(--dark-text-color)] text-lg focus:outline-none focus:ring-4 focus:ring-[var(--accent-color)] shadow-xl bg-white backdrop-blur-sm border border-white/20"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--accent-color)] text-[var(--dark-text-color)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--accent2-color)] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 whitespace-nowrap flex items-center justify-center gap-2 group"
              >
                <span>Notify Me</span>
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" aria-hidden />
              </button>
            </div>
            <input type="hidden" name="name" value="Newsletter Subscriber" />
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--accent-color)]" aria-hidden />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--accent-color)]" aria-hidden />
              <span>Exclusive early access</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--accent-color)]" aria-hidden />
              <span>Unsubscribe anytime</span>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--accent-color)] mb-1">5,000+</div>
                <div className="text-sm text-gray-300">Riders on the waitlist</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white opacity-20" aria-hidden />
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--accent-color)] mb-1">Q2 2026</div>
                <div className="text-sm text-gray-300">Expected launch date</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white opacity-20" aria-hidden />
              <div className="text-center">
                <div className="text-4xl font-bold text-[var(--accent-color)] mb-1">iOS &amp; Android</div>
                <div className="text-sm text-gray-300">Both platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ride With Confidence. Download MotoTagz Today */}
      <section className="code-section relative bg-gradient-to-br from-[var(--dark-background-color)] via-[var(--primary-color)] to-[var(--dark-background-color)] text-white py-20 sm:py-28 overflow-hidden" id="s2k59rn">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-color)] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent2-color)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <FontAwesomeIcon icon={faShieldHalved} className="text-6xl text-[var(--accent-color)] mb-6 inline-block" aria-hidden />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ride With Confidence. Download MotoTagz Today.
          </h2>

          <p className="text-xl sm:text-2xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Join thousands of riders who never ride alone anymore. Free during beta –
            protect yourself and give your loved ones peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="/features" className="group bg-[var(--accent-color)] text-[var(--dark-text-color)] px-10 py-5 rounded-xl font-bold text-xl hover:bg-[var(--accent2-color)] transition-all shadow-2xl hover:shadow-[0_20px_60px_rgba(254,201,0,0.4)] transform hover:-translate-y-1 flex items-center gap-3">
              <FontAwesomeIcon icon={faDownload} className="text-2xl group-hover:animate-bounce" aria-hidden />
              <span>Get MotoTagz Now</span>
            </a>
            <a href="/how-it-works" className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all border-2 border-white/40 flex items-center gap-3">
              <FontAwesomeIcon icon={faInfoCircle} className="text-2xl" aria-hidden />
              <span>Learn More</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--accent-color)] text-xl" aria-hidden />
              <span>No subscription fees during beta</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--accent-color)] text-xl" aria-hidden />
              <span>iOS &amp; Android compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--accent-color)] text-xl" aria-hidden />
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 text-sm mb-4 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faUsers} aria-hidden />
              Trusted by riders across the country
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent-color)]">10,000+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent-color)]">24/7</div>
                <div className="text-sm text-gray-300">Protection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent-color)]">&lt;3 min</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
