// app.js
// =========================
// i18n Translations
// =========================
const i18n = {
  ar: {
    app_title: "برنامج صيام وصلاة داوود عليه السلام - نسخة متقدمة",
    header_title: "برنامج صيام وصلاة داوود عليه السلام",
    header_subtitle: "رحلة روحانية مباركة • شهر كامل",
    loc_detecting: "جاري تحديد الموقع...",
    btn_grid: "📅 عرض الشبكة",
    btn_list: "📋 عرض القائمة",
    btn_print: "🖨️ طباعة",
    btn_download_notes: "💾 تحميل الملاحظات",
    btn_import_notes: "📁 استيراد الملاحظات",
    btn_settings: "⚙️ الإعدادات",
    btn_enable_notifs: "🔔 تفعيل التنبيهات",
    btn_enable_adhan: "🔊 تفعيل صوت الأذان",
    btn_stop_adhan: "⏹️ إيقاف الأذان",
    legend_notes: "تم كتابة ملاحظات",
    legend_fasting: "يوم صيام",
    legend_gym: "يوم جيم",
    legend_adhan: "تنبيه الأذان",
    settings_title: "⚙️ إعدادات البرنامج",
    label_start_date: "📅 تاريخ البداية",
    label_duration: "⏱️ مدة التحدي (بالأيام)",
    label_country: "🌍 البلد",
    country_loading: "جاري التحميل...",
    label_city: "🏙️ المدينة",
    btn_search: "🔍 بحث",
    city_help: "اكتب اسم مدينتك وستظهر لك اقتراحات تلقائياً • يمكنك أيضاً الضغط Enter أو زر \"بحث\"",
    label_coords: "📍 الإحداثيات (تلقائي)",
    label_lat: "خط العرض",
    label_lng: "خط الطول",
    coords_help: "✨ يتم الحصول عليها تلقائياً عند اختيار مدينة • يمكن التعديل يدوياً للدقة العالية",
    label_method: "🕌 طريقة الحساب",
    optgroup_world: "🌍 العالم الإسلامي",
    optgroup_middleeast: "🕌 الشرق الأوسط",
    optgroup_gulf: "🌊 الخليج العربي",
    optgroup_africa: "🌍 شمال أفريقيا",
    optgroup_asia: "🌏 آسيا",
    optgroup_europe: "🌍 أوروبا",
    optgroup_special: "🌟 خاص",
    method_0: "شيعة إثنا عشرية، معهد ليفا، قم",
    method_1: "جامعة العلوم الإسلامية، كراتشي",
    method_2: "الجمعية الإسلامية لأمريكا الشمالية (ISNA)",
    method_3: "رابطة العالم الإسلامي",
    method_4: "أم القرى، مكة المكرمة",
    method_5: "الهيئة العامة المصرية للمساحة",
    method_7: "معهد الجيوفيزياء، جامعة طهران",
    method_8: "منطقة الخليج",
    method_9: "الكويت",
    method_10: "قطر",
    method_11: "سنغافورة (ماجلس أوغاما إسلام)",
    method_12: "فرنسا (الاتحاد الإسلامي)",
    method_13: "تركيا (ديانت)",
    method_14: "روسيا (الإدارة الروحية لمسلمي روسيا)",
    method_15: "لجنة رؤية الهلال العالمية",
    method_16: "دبي، الإمارات",
    method_17: "ماليزيا (جاكيم)",
    method_18: "تونس",
    method_19: "الجزائر",
    method_20: "إندونيسيا (كيمينتريان أجاما)",
    method_21: "المغرب",
    method_22: "البرتغال (كومونيدادي إسلاميكا دي لشبونة)",
    method_23: "الأردن (وزارة الأوقاف)",
    method_99: "طريقة مخصصة",
    label_gym_days: "💪 أيام الجيم (اختر 3 أيام كحد أقصى)",
    gym_day_sun: "الأحد",
    gym_day_mon: "الإثنين",
    gym_day_tue: "الثلاثاء",
    gym_day_wed: "الأربعاء",
    gym_day_thu: "الخميس",
    gym_day_fri: "الجمعة",
    gym_day_sat: "السبت",
    gym_days_error: "يرجى اختيار 3 أيام كحد أقصى للجيم! ⚠️",
    gym_days_hint: "تم اختيار 3 أيام • الأيام الأخرى غير متاحة الآن",
    method_auto_selected: "تم اختيار طريقة الحساب تلقائياً حسب البلد",
    method_auto_help: "💡 يتم اختيار طريقة الحساب المناسبة تلقائياً عند اختيار البلد",
    label_notifs_adhan: "🔔 التنبيهات وصوت الأذان",
    toggle_notifs: "تفعيل التنبيهات (يستلزم إذن المتصفح)",
    toggle_adhan: "تشغيل صوت الأذان عند الأذان",
    label_volume: "🔊 مستوى الصوت",
    label_adhan_src: "📻 رابط ملف الأذان (اختياري)",
    btn_save: "💾 حفظ الإعدادات",
    btn_cancel: "إلغاء",
    sugg_footer: "🔎 بيانات الاقتراحات مقدمة من OpenStreetMap (Nominatim)",

    week_label: "الأسبوع",
    prayer_isha: "🕌 العشاء:",
    prayer_fajr: "🌅 الفجر:",
    prayer_maghrib: "🌆 المغرب:",
    badge_gym: "💪 جيم",
    badge_fast36: "🌙 صيام 36 ساعة",
    badge_feast: "🍽️ إفطار",
    saved: "✓ تم التسجيل",
    david_title: "✨ جدول صلاة داوود عليه السلام",
    sleep1: "😴 النوم الأول (نصف الليل)",
    qiyam: "🤲 قيام الليل (ثلث الليل)",
    sleep2: "💤 النوم الثاني (سدس الليل)",
    night_duration: "مدة الليل",
    fasting_info: "🌙 معلومات الصيام",
    fast_start: "🌅 بداية الصيام",
    fast_end: "🌆 نهاية الصيام",
    diary_title: "📝 مذكراتي اليومية",
    diary_placeholder: "سجلي هنا مشاعرك، تأملاتك الروحانية، أو أهدافك لهذا اليوم المبارك...",
    saved_short: "محفوظ",

    notif_enabled: "تم تفعيل التنبيهات ✅",
    notif_denied: "تم رفض إذن التنبيهات ⚠️",
    notif_unsupported: "المتصفح لا يدعم التنبيهات ❌",
    notes_downloaded: "تم تحميل الملاحظات بنجاح! ✅",
    notes_imported: "تم استيراد الملاحظات بنجاح! ✅",
    coords_searching: "جاري الحصول على إحداثيات المدينة... ⏳",
    city_searching: "جاري البحث عن المدينة... 🔍",
    city_need_name: "الرجاء إدخال اسم المدينة أولاً! ⚠️",
    country_need: "الرجاء اختيار البلد أولاً! ⚠️",
    city_found: (c, country) => `تم اختيار ${c} (${country}) ✅`,
    city_not_found: "لم يتم العثور على المدينة، الرجاء إدخال الإحداثيات يدوياً ⚠️",
    coords_error: "خطأ في الحصول على الإحداثيات ❌",
    loaded_ok: "تم تحميل البرنامج بنجاح! ✅",
    adhan_enabled: "تم تفعيل صوت الأذان ✅",
    adhan_blocked: "تم كتم صوت الأذان من المتصفح. اضغطي \"تفعيل صوت الأذان\" ثم أعيدي المحاولة.",
    today: "اليوم",
    tomorrow: "الغد",
    time_for_prayer: (p, city, time, day) => `⏰ حان الآن وقت ${p} (${city})`,
    time_label: (t, day) => `الوقت: ${t} • ${day}`,

    day_names: ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت']
  },
  en: {
    app_title: "Davidic Fasting & Prayer Planner — Advanced",
    header_title: "Davidic Fasting & Prayer Planner",
    header_subtitle: "A blessed spiritual journey • full month",
    loc_detecting: "Detecting location...",
    btn_grid: "📅 Grid View",
    btn_list: "📋 List View",
    btn_print: "🖨️ Print",
    btn_download_notes: "💾 Download Notes",
    btn_import_notes: "📁 Import Notes",
    btn_settings: "⚙️ Settings",
    btn_enable_notifs: "🔔 Enable Notifications",
    btn_enable_adhan: "🔊 Enable Adhan Sound",
    btn_stop_adhan: "⏹️ Stop Adhan",
    legend_notes: "Notes written",
    legend_fasting: "Fasting day",
    legend_gym: "Gym day",
    legend_adhan: "Adhan alert",
    settings_title: "⚙️ App Settings",
    label_start_date: "📅 Start date",
    label_duration: "⏱️ Challenge length (days)",
    label_country: "🌍 Country",
    country_loading: "Loading...",
    label_city: "🏙️ City",
    btn_search: "🔍 Search",
    city_help: "Type your city to see suggestions • You can also press Enter or the Search button",
    label_coords: "📍 Coordinates (auto)",
    label_lat: "Latitude",
    label_lng: "Longitude",
    coords_help: "✨ Automatically filled when selecting a city • You can tweak manually for accuracy",
    label_method: "🕌 Calculation method",
    optgroup_world: "🌍 Islamic World",
    optgroup_middleeast: "🕌 Middle East",
    optgroup_gulf: "🌊 Arabian Gulf",
    optgroup_africa: "🌍 North Africa",
    optgroup_asia: "🌏 Asia",
    optgroup_europe: "🌍 Europe",
    optgroup_special: "🌟 Special",
    method_0: "Shia Ithna-Ashari, Leva Institute, Qum",
    method_1: "University of Islamic Sciences, Karachi",
    method_2: "Islamic Society of North America (ISNA)",
    method_3: "Muslim World League",
    method_4: "Umm Al-Qura University, Makkah",
    method_5: "Egyptian General Authority of Survey",
    method_7: "Institute of Geophysics, University of Tehran",
    method_8: "Gulf Region",
    method_9: "Kuwait",
    method_10: "Qatar",
    method_11: "Majlis Ugama Islam Singapura, Singapore",
    method_12: "Union Organization Islamic de France",
    method_13: "Diyanet İşleri Başkanlığı, Turkey",
    method_14: "Spiritual Administration of Muslims of Russia",
    method_15: "Moonsighting Committee Worldwide",
    method_16: "Dubai, UAE (experimental)",
    method_17: "Jabatan Kemajuan Islam Malaysia (JAKIM)",
    method_18: "Tunisia",
    method_19: "Algeria",
    method_20: "Kementerian Agama Republik Indonesia",
    method_21: "Morocco",
    method_22: "Comunidade Islamica de Lisboa, Portugal",
    method_23: "Ministry of Awqaf, Jordan",
    method_99: "Custom Method",
    label_gym_days: "💪 Gym Days (choose maximum 3)",
    gym_day_sun: "Sunday",
    gym_day_mon: "Monday",
    gym_day_tue: "Tuesday",
    gym_day_wed: "Wednesday",
    gym_day_thu: "Thursday",
    gym_day_fri: "Friday",
    gym_day_sat: "Saturday",
    gym_days_error: "Please choose maximum 3 gym days! ⚠️",
    gym_days_hint: "3 days selected • Other days are now disabled",
    method_auto_selected: "Calculation method automatically selected based on country",
    method_auto_help: "💡 The appropriate calculation method is automatically selected when you choose a country",
    label_notifs_adhan: "🔔 Notifications & Adhan",
    toggle_notifs: "Enable notifications (requires browser permission)",
    toggle_adhan: "Play adhan at prayer time",
    label_volume: "🔊 Volume",
    label_adhan_src: "📻 Adhan file URL (optional)",
    btn_save: "💾 Save Settings",
    btn_cancel: "Cancel",
    sugg_footer: "🔎 Suggestions powered by OpenStreetMap (Nominatim)",

    week_label: "Week",
    prayer_isha: "🕌 Isha:",
    prayer_fajr: "🌅 Fajr:",
    prayer_maghrib: "🌆 Maghrib:",
    badge_gym: "💪 Gym",
    badge_fast36: "🌙 36h Fasting",
    badge_feast: "🍽️ Feast",
    saved: "✓ Saved",
    david_title: "✨ Davidic Night Schedule",
    sleep1: "😴 First sleep (half night)",
    qiyam: "🤲 Night prayer (third of night)",
    sleep2: "💤 Second sleep (sixth of night)",
    night_duration: "Night length",
    fasting_info: "🌙 Fasting Info",
    fast_start: "🌅 Fasting begins",
    fast_end: "🌆 Fasting ends",
    diary_title: "📝 My Daily Journal",
    diary_placeholder: "Write your feelings, reflections, and goals here...",
    saved_short: "Saved",

    notif_enabled: "Notifications enabled ✅",
    notif_denied: "Notifications permission denied ⚠️",
    notif_unsupported: "Notifications not supported ❌",
    notes_downloaded: "Notes downloaded successfully! ✅",
    notes_imported: "Notes imported successfully! ✅",
    coords_searching: "Fetching city coordinates... ⏳",
    city_searching: "Searching city... 🔍",
    city_need_name: "Please enter a city name first! ⚠️",
    country_need: "Please choose a country first! ⚠️",
    city_found: (c, country) => `Selected ${c} (${country}) ✅`,
    city_not_found: "City not found, please enter coordinates manually ⚠️",
    coords_error: "Error fetching coordinates ❌",
    loaded_ok: "Program loaded successfully! ✅",
    adhan_enabled: "Adhan sound enabled ✅",
    adhan_blocked: "Adhan autoplay was blocked. Click \"Enable Adhan sound\" then try again.",
    today: "today",
    tomorrow: "tomorrow",
    time_for_prayer: (p, city, time, day) => `⏰ It's time for ${p} in ${city}`,
    time_label: (t, day) => `Time: ${t} • ${day}`,

    day_names: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  }
};

let currentLang = 'ar';
function t(key, ...args){
  const dict = i18n[currentLang] || i18n.ar;
  const val = dict[key];
  if (typeof val === 'function') return val(...args);
  return val ?? key;
}
function applyTranslations(){
  document.title = t('app_title');
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (el.tagName === 'OPTGROUP') {
      el.setAttribute('label', translated);
    } else if (el.tagName === 'OPTION') {
      el.textContent = translated;
    } else {
      el.innerText = translated;
    }
  });
  const cityInput = document.getElementById('cityInput');
  cityInput.placeholder = currentLang==='ar' ? 'اسم مدينتك' : 'Your city';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang==='ar' ? 'rtl' : 'ltr';
  // Toggle active button UI
  document.getElementById('langAr').classList.toggle('active', currentLang==='ar');
  document.getElementById('langEn').classList.toggle('active', currentLang==='en');
  // Rerender views to reflect localized labels
  createGridView();
  createListView();
}
function setLanguage(lang){
  currentLang = (lang==='en' ? 'en' : 'ar');
  settings.lang = currentLang;
  localStorage.setItem('davidicSettings', JSON.stringify(settings));
  applyTranslations();
  // refresh the window
  location.reload();
  window.location.href = window.location.href;
  
}

// =========================
// Settings and Configuration
// =========================
let settings = {
  startDate: null,
  duration: 90,
  country: 'MA',
  city: 'El Jadida',
  calculationMethod: 21, // Morocco - وزارة الأوقاف المغربية (Correct API ID)
  latitude: 32.25,
  longitude: -8.51,
  notificationsEnabled: false,
  adhanSoundEnabled: false,
  adhanVolume: 1,
  adhanSrc: '',
  timezone: null,
  lang: 'ar',
  gymDays: [1, 3, 5] // Default: Monday, Wednesday, Friday (0=Sunday, 1=Monday, etc.)
};

let countries = [];
let schedule = [];
let prayerTimesCache = {};
let scheduledTimers = [];
let lastFetchedTimezone = null;

// Country to calculation method mapping (based on Aladhan API)
const countryMethodMap = {
  'MA': 21,  // Morocco
  'SA': 4,   // Saudi Arabia (Makkah)
  'EG': 5,   // Egypt
  'AE': 16,  // UAE (Dubai)
  'QA': 10,  // Qatar
  'KW': 9,   // Kuwait
  'JO': 23,  // Jordan
  'DZ': 19,  // Algeria
  'TN': 18,  // Tunisia
  'PK': 1,   // Pakistan (Karachi)
  'IR': 7,   // Iran (Tehran)
  'ID': 20,  // Indonesia
  'MY': 17,  // Malaysia (JAKIM)
  'SG': 11,  // Singapore
  'TR': 13,  // Turkey
  'FR': 12,  // France
  'PT': 22,  // Portugal
  'RU': 14,  // Russia
  'US': 2,   // USA (ISNA)
  'CA': 2,   // Canada (ISNA)
  'GB': 3,   // UK (Muslim World League)
  'DE': 3,   // Germany (Muslim World League)
  'NL': 3,   // Netherlands (Muslim World League)
  'BE': 3,   // Belgium (Muslim World League)
  'SE': 3,   // Sweden (Muslim World League)
  'NO': 3,   // Norway (Muslim World League)
  'DK': 3,   // Denmark (Muslim World League)
  'ES': 3,   // Spain (Muslim World League)
  'IT': 3,   // Italy (Muslim World League)
  'AU': 3,   // Australia (Muslim World League)
  'NZ': 3    // New Zealand (Muslim World League)
};

// Notes management
const STORAGE_KEY = 'davidic_fasting_notes';
let notesData = {};

// Flags
let adhanIsPlaying = false;
let volumePreviewTimeout = null;

// Debounce
function debounce(fn, wait = 300) {
  let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), wait); };
}

// Load / Save
function loadSettings(){
  const saved = localStorage.getItem('davidicSettings');
  if (saved) settings = { ...settings, ...JSON.parse(saved) };
  currentLang = settings.lang || 'ar';
  // Ensure gymDays is an array
  if (!Array.isArray(settings.gymDays)) settings.gymDays = [1, 3, 5];
}
function loadNotes(){
  try{
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) notesData = JSON.parse(saved);
  }catch(e){ console.error(e); }
}
function saveNotes(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData)); }catch(e){ console.error(e); }
}

// Notifications
async function requestNotifications(){
  if (!('Notification' in window)) return showToast(t('notif_unsupported'), true);
  if (Notification.permission === 'granted'){
    settings.notificationsEnabled = true;
    localStorage.setItem('davidicSettings', JSON.stringify(settings));
    return showToast(t('notif_enabled'));
  }
  try{
    const perm = await Notification.requestPermission();
    if (perm === 'granted'){
      settings.notificationsEnabled = true;
      localStorage.setItem('davidicSettings', JSON.stringify(settings));
      showToast(t('notif_enabled'));
    }else{
      settings.notificationsEnabled = false;
      showToast(t('notif_denied'), true);
    }
  }catch{ showToast(t('notif_denied'), true); }
}
function canNotify(){
  return ('Notification' in window) && Notification.permission === 'granted' && settings.notificationsEnabled;
}
function showBrowserNotification(title, body){
  if (!canNotify()) return;
  try{
    const n = new Notification(title, {
      body,
      icon: 'https://cdn-icons-png.flaticon.com/512/833/833314.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/833/833314.png',
      vibrate: [200,100,200],
      silent: false
    });
    n.onclick = ()=>window.focus();
  }catch(e){ console.warn('Notification error:', e); }
}

// Audio (Adhan)
function enableAdhanSound(){
  const audio = document.getElementById('adhanAudio');
  if (settings.adhanSrc) audio.src = settings.adhanSrc;
  audio.volume = Number(settings.adhanVolume) || 1;
  audio.play().then(()=>{
    audio.pause(); audio.currentTime=0;
    settings.adhanSoundEnabled = true;
    localStorage.setItem('davidicSettings', JSON.stringify(settings));
    showToast(t('adhan_enabled'));
  }).catch(()=>{
    settings.adhanSoundEnabled = true;
    localStorage.setItem('davidicSettings', JSON.stringify(settings));
    showToast(t('adhan_enabled'));
  });
}
function playAdhan(){
  if (!settings.adhanSoundEnabled) return;
  const audio = document.getElementById('adhanAudio');
  if (settings.adhanSrc && audio.src !== settings.adhanSrc) audio.src = settings.adhanSrc;
  audio.volume = Number(settings.adhanVolume) || 1;
  audio.currentTime = 0;
  document.getElementById('stopAdhanBtn').style.display = 'inline-flex';
  adhanIsPlaying = true;
  audio.play().catch(err=>{
    console.warn('Autoplay blocked:', err);
    showToast(t('adhan_blocked'), true);
  });
  setTimeout(()=>stopAdhan(), 90*1000);
}
function stopAdhan(){
  const audio = document.getElementById('adhanAudio');
  audio.pause();
  adhanIsPlaying = false;
  document.getElementById('stopAdhanBtn').style.display = 'none';
}
function onVolumeInput(e){
  const v = Number(e.target.value || 1);
  settings.adhanVolume = v;
  localStorage.setItem('davidicSettings', JSON.stringify(settings));
  const audio = document.getElementById('adhanAudio');
  audio.volume = v;
}
function onVolumeChange(e){
  const v = Number(e.target.value || 1);
  settings.adhanVolume = v;
  localStorage.setItem('davidicSettings', JSON.stringify(settings));
  const audio = document.getElementById('adhanAudio');
  audio.volume = v;
  if (!settings.adhanSoundEnabled) return;
  if (adhanIsPlaying) return;
  try{
    if (settings.adhanSrc && audio.src !== settings.adhanSrc) audio.src = settings.adhanSrc;
    clearTimeout(volumePreviewTimeout);
    audio.currentTime = 0;
    audio.play().then(()=>{
      volumePreviewTimeout = setTimeout(()=>{ audio.pause(); audio.currentTime=0; }, 7000);
    }).catch(err=>console.warn('Preview blocked:', err));
  }catch(err){ console.warn('Preview error:', err); }
}

// Location
async function detectLocation(){
  try{
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('Location API failed');
    const data = await response.json();
    if (data.error) throw new Error(data.reason || 'Location detection failed');

    settings.country = data.country_code || 'MA';
    settings.countryName = data.country_name || 'Morocco';
    settings.city = data.city || 'El Jadida';
    settings.latitude = data.latitude || 32.25;
    settings.longitude = data.longitude || -8.51;
    
    // Automatically set calculation method based on country
    if (countryMethodMap[settings.country]) {
      settings.calculationMethod = countryMethodMap[settings.country];
    } else {
      // Default to Muslim World League for countries not in the map
      settings.calculationMethod = 3;
    }
    
    updateLocationDisplay();
  }catch{
    updateLocationDisplay();
  }
}
function updateLocationDisplay(){
  const text = settings.city ? `${settings.city}, ${settings.countryName || settings.country}` : (currentLang==='ar' ? 'لم يتم تحديد' : 'Not set');
  const el = document.getElementById('locationText');
  el.textContent = text;
}

// Prayer Times API
async function fetchPrayerTimes(date, lat, lng, method=21){
  try{
    const [day, month, year] = date.split('/');
    const formattedDate = `${day.padStart(2,'0')}-${month.padStart(2,'0')}-${year}`;
    const url = `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${lat}&longitude=${lng}&method=${method}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    if (data.code === 200 && data.data && data.data.timings){
      const tms = data.data.timings;
      const times = {
        fajr: tms.Fajr.substring(0,5),
        sunrise: tms.Sunrise.substring(0,5),
        dhuhr: tms.Dhuhr.substring(0,5),
        asr: tms.Asr.substring(0,5),
        maghrib: tms.Maghrib.substring(0,5),
        isha: tms.Isha.substring(0,5)
      };
      lastFetchedTimezone = data.data.meta?.timezone || null;
      settings.timezone = lastFetchedTimezone || settings.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
      return times;
    }
    throw new Error('Invalid response format');
  }catch(error){
    console.error('Prayer API error:', error);
    return { fajr:'05:30', sunrise:'06:50', dhuhr:'13:20', asr:'16:45', maghrib:'19:30', isha:'20:50' };
  }
}
async function fetchPrayerTimesWithMeta(date, lat, lng, method=21){
  const times = await fetchPrayerTimes(date, lat, lng, method);
  return { times, timezone: settings.timezone || lastFetchedTimezone || Intl.DateTimeFormat().resolvedOptions().timeZone };
}

// Generate Schedule with improved gym/fasting logic
async function generateSchedule(){
  const grid = document.getElementById('calendarGrid');
  const listView = document.getElementById('listView');
  grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--royal-plum); font-size:1.2rem;">⏳ ${currentLang==='ar'?'جاري تحميل البرنامج وأوقات الصلاة...':'Loading program & prayer times...'}</div>`;
  listView.innerHTML = '';
  schedule = [];
  const startDate = new Date(settings.startDate);
  const duration = parseInt(settings.duration);
  
  // Get gym days from settings
  const gymDaysSet = new Set(settings.gymDays);

  for(let i=0;i<duration;i++){
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const dateStr = `${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}`;
    const fullDateStr = `${day}/${month}/${year}`;

    const dayNames = i18n[currentLang].day_names;
    const dayName = dayNames[currentDate.getDay()];

    const prayerTimes = await fetchPrayerTimes(fullDateStr, settings.latitude, settings.longitude, settings.calculationMethod);
    prayerTimesCache[dateStr] = prayerTimes;

    const dayOfWeek = currentDate.getDay();
    const isGymDay = gymDaysSet.has(dayOfWeek);
    
    // Improved fasting logic:
    // - Don't fast on gym days
    // - Don't fast if yesterday was a fasting day (avoid consecutive fasting)
    // - First day is NOT automatically a fasting day
    const previousDayFasted = schedule.length > 0 && schedule[schedule.length - 1].fasting;
    const shouldFast = !isGymDay && !previousDayFasted;
    
    schedule.push({
      day: dayName,
      date: dateStr,
      fullDate: fullDateStr,
      year: year,
      fasting: shouldFast,
      gym: isGymDay
    });

    if ((i+1)%10===0 || i===duration-1){
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--royal-plum); font-size:1.2rem;">⏳ ${currentLang==='ar'?'جاري التحميل...':'Loading...'} ${i+1}/${duration}</div>`;
    }
  }

  createGridView();
  createListView();
  scheduleAdhans().catch(console.error);
  showToast(t('loaded_ok'));
}

// Handle gym day checkbox changes - disable others when 3 are selected
function handleGymDayChange(){
  const checkboxes = [];
  for (let i = 0; i < 7; i++) {
    const checkbox = document.getElementById(`gymDay${i}`);
    if (checkbox) checkboxes.push(checkbox);
  }
  
  const checkedCount = checkboxes.filter(cb => cb.checked).length;
  const hint = document.getElementById('gymDaysHint');
  const hintText = document.getElementById('gymDaysHintText');
  
  if (checkedCount >= 3) {
    // Disable unchecked boxes
    checkboxes.forEach(cb => {
      if (!cb.checked) {
        cb.disabled = true;
        cb.parentElement.style.opacity = '0.5';
        cb.parentElement.style.cursor = 'not-allowed';
      }
    });
    // Show hint
    hint.style.display = 'block';
    hintText.textContent = t('gym_days_hint');
  } else {
    // Enable all boxes
    checkboxes.forEach(cb => {
      cb.disabled = false;
      cb.parentElement.style.opacity = '1';
      cb.parentElement.style.cursor = 'pointer';
    });
    // Hide hint
    hint.style.display = 'none';
  }
}

// Handle country change - automatically select appropriate calculation method
function handleCountryChange(){
  const countrySelect = document.getElementById('countrySelect');
  const methodSelect = document.getElementById('calculationMethod');
  const selectedCountry = countrySelect.value;
  
  if (selectedCountry && countryMethodMap[selectedCountry]) {
    // Auto-select the calculation method for this country
    methodSelect.value = countryMethodMap[selectedCountry];
    
    // Visual feedback - briefly highlight the method dropdown
    methodSelect.style.transition = 'all 0.3s ease';
    methodSelect.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)';
    methodSelect.style.border = '2px solid #f59e0b';
    
    setTimeout(() => {
      methodSelect.style.background = '';
      methodSelect.style.border = '';
    }, 1500);
  } else if (selectedCountry) {
    // Default to Muslim World League for countries not in map
    methodSelect.value = 3;
  }
}

// Countries
async function openSettings(){
  document.getElementById('settingsModal').classList.add('active');

  if (countries.length===0){
    const select = document.getElementById('countrySelect');
    select.innerHTML = `<option value="">${t('country_loading')}</option>`;
    await loadCountries();
  }

  if (settings.startDate){
    document.getElementById('startDate').value = settings.startDate;
  } else {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('startDate').value = today;
  }

  document.getElementById('duration').value = settings.duration;
  document.getElementById('countrySelect').value = settings.country || '';
  document.getElementById('cityInput').value = settings.city || '';
  document.getElementById('latitudeInput').value = settings.latitude || '';
  document.getElementById('longitudeInput').value = settings.longitude || '';
  document.getElementById('calculationMethod').value = settings.calculationMethod;

  // Set gym day checkboxes
  for (let i = 0; i < 7; i++) {
    const checkbox = document.getElementById(`gymDay${i}`);
    if (checkbox) {
      checkbox.checked = settings.gymDays.includes(i);
    }
  }
  
  // Update gym days UI (disable/enable based on selection)
  handleGymDayChange();

  document.getElementById('toggleNotifs').checked = !!settings.notificationsEnabled;
  document.getElementById('toggleAdhanSound').checked = !!settings.adhanSoundEnabled;
  const vol = document.getElementById('adhanVolume');
  vol.value = settings.adhanVolume ?? 1;
  const src = document.getElementById('adhanSrc');
  src.value = settings.adhanSrc ?? '';

  if (!vol._bound){
    vol.addEventListener('input', onVolumeInput);
    vol.addEventListener('change', onVolumeChange);
    vol._bound = true;
  }
  applyTranslations();
}
function closeSettings(){
  hideCitySuggestions();
  document.getElementById('settingsModal').classList.remove('active');
}
async function saveSettings(){
  settings.startDate = document.getElementById('startDate').value;
  settings.duration  = parseInt(document.getElementById('duration').value);
  settings.country   = document.getElementById('countrySelect').value;
  settings.city      = document.getElementById('cityInput').value;

  const latInput = document.getElementById('latitudeInput').value;
  const lngInput = document.getElementById('longitudeInput').value;

  if (latInput && lngInput){
    settings.latitude = parseFloat(latInput);
    settings.longitude = parseFloat(lngInput);
  }else if (settings.city && settings.country){
    showToast(t('coords_searching'));
    await getCityCoordinates(settings.city, settings.country);
  }

  settings.calculationMethod = parseInt(document.getElementById('calculationMethod').value);

  // Get selected gym days
  const selectedGymDays = [];
  for (let i = 0; i < 7; i++) {
    const checkbox = document.getElementById(`gymDay${i}`);
    if (checkbox && checkbox.checked) {
      selectedGymDays.push(i);
    }
  }
  
  // Validate max 3 gym days
  if (selectedGymDays.length > 3) {
    showToast(t('gym_days_error'), true);
    return;
  }
  
  settings.gymDays = selectedGymDays;

  const country = countries.find(c=>c.code===settings.country);
  settings.countryName = country ? (currentLang==='ar'?country.nameAr:country.name) : settings.country;

  settings.notificationsEnabled = document.getElementById('toggleNotifs').checked;
  settings.adhanSoundEnabled = document.getElementById('toggleAdhanSound').checked;
  settings.adhanVolume = Number(document.getElementById('adhanVolume').value || 1);
  const newSrc = (document.getElementById('adhanSrc').value || '').trim();
  settings.adhanSrc = newSrc;

  localStorage.setItem('davidicSettings', JSON.stringify(settings));

  const audio = document.getElementById('adhanAudio');
  if (newSrc) audio.src = newSrc;
  audio.volume = settings.adhanVolume;

  updateLocationDisplay();
  closeSettings();

  prayerTimesCache = {};
  clearAllAdhanTimers();
  await generateSchedule();
}

async function getCityCoordinates(city, countryCode){
  try{
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&countrycodes=${countryCode}&format=json&limit=1&addressdetails=1&accept-language=ar,en`,
      { headers: { 'User-Agent':'Davidic-Fasting-App/1.0' } }
    );
    const data = await response.json();
    if (data && data.length>0){
      const addr = data[0].address || {};
      const cc = (addr.country_code || '').toUpperCase();
      settings.latitude = parseFloat(data[0].lat);
      settings.longitude = parseFloat(data[0].lon);
      if (cc) {
        settings.country = cc;
        // Auto-select calculation method based on country
        if (countryMethodMap[cc]) {
          settings.calculationMethod = countryMethodMap[cc];
        }
      }
      document.getElementById('latitudeInput').value = settings.latitude.toFixed(4);
      document.getElementById('longitudeInput').value = settings.longitude.toFixed(4);
      if (cc) document.getElementById('countrySelect').value = cc;
      // Update calculation method dropdown
      document.getElementById('calculationMethod').value = settings.calculationMethod;
      showToast(t('city_found', city, addr.country || cc || ''));
    } else {
      showToast(t('city_not_found'), true);
    }
  }catch(e){
    console.error(e);
    showToast(t('coords_error'), true);
  }
}
async function searchCity(){
  const city = document.getElementById('cityInput').value;
  const country = document.getElementById('countrySelect').value;
  if (!city) return showToast(t('city_need_name'), true);
  if (!country) return showToast(t('country_need'), true);
  showToast(t('city_searching'));
  await getCityCoordinates(city, country);
}
async function loadCountries(){
  const fallbackCountries = [
    { code:'SA', name:'Saudi Arabia', nameAr:'السعودية' }, { code:'AE', name:'United Arab Emirates', nameAr:'الإمارات' },
    { code:'EG', name:'Egypt', nameAr:'مصر' }, { code:'MA', name:'Morocco', nameAr:'المغرب' }, { code:'DZ', name:'Algeria', nameAr:'الجزائر' },
    { code:'TN', name:'Tunisia', nameAr:'تونس' }, { code:'TR', name:'Turkey', nameAr:'تركيا' }, { code:'FR', name:'France', nameAr:'فرنسا' },
    { code:'GB', name:'United Kingdom', nameAr:'بريطانيا' }, { code:'DE', name:'Germany', nameAr:'ألمانيا' }, { code:'US', name:'United States', nameAr:'أمريكا' },
    { code:'CA', name:'Canada', nameAr:'كندا' }, { code:'ES', name:'Spain', nameAr:'إسبانيا' }, { code:'IT', name:'Italy', nameAr:'إيطاليا' },
    { code:'ID', name:'Indonesia', nameAr:'إندونيسيا' }, { code:'PK', name:'Pakistan', nameAr:'باكستان' }, { code:'BD', name:'Bangladesh', nameAr:'بنغلاديش' }
  ];
  try{
    const response = await fetch('https://restcountries.com/v3.1/all?fields=cca2,name,nativeName,translations');
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    if (Array.isArray(data)){
      countries = data
        .filter(c=>c.cca2 && c.name?.common)
        .map(c=>({
          code: c.cca2,
          name: c.name.common,
          nameAr: c.translations?.ara?.common || c.name?.nativeName?.ara?.common || c.name.common
        }))
        .sort((a,b)=> (currentLang==='ar'?a.nameAr.localeCompare(b.nameAr,'ar'):a.name.localeCompare(b.name,'en')));
    } else { throw new Error('Invalid data'); }
  }catch{
    countries = fallbackCountries.sort((a,b)=> (currentLang==='ar'?a.nameAr.localeCompare(b.nameAr,'ar'):a.name.localeCompare(b.name,'en')));
  }
  const select = document.getElementById('countrySelect');
  select.innerHTML = `<option value="">${t('country_loading')}</option>` +
    countries.map(c=>`<option value="${c.code}">${currentLang==='ar'?c.nameAr:c.name}</option>`).join('');
  if (settings.country) select.value = settings.country;
}

// Notes Import/Export & Toast
function downloadNotes(){
  const dataStr = JSON.stringify(notesData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'davidic_fasting_notes_' + new Date().toISOString().split('T')[0] + '.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(t('notes_downloaded'));
}
function uploadNotes(event){
  const file = event.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = e=>{
    try{
      const imported = JSON.parse(e.target.result);
      notesData = imported; saveNotes();
      createGridView(); createListView();
      showToast(t('notes_imported'));
    }catch{
      alert(currentLang==='ar'?'خطأ في قراءة الملف. تأكدي من أنه ملف JSON صحيح.':'Error reading file. Please ensure it is a valid JSON file.');
    }
  };
  reader.readAsText(file);
}
function showToast(message, danger=false){
  const el = document.createElement('div');
  el.className = 'notification' + (danger?' danger':'');
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(()=>{
    el.style.animation = 'slideOut .3s ease';
    setTimeout(()=>el.remove(), 300);
  }, 3000);
}

// Davidic Times
function calculateDavidTimes(ishaTime, fajrTime){
  const [ih, im] = ishaTime.split(':').map(Number);
  const [fh, fm] = fajrTime.split(':').map(Number);
  let ishaMinutes = ih*60+im;
  let fajrMinutes = fh*60+fm;
  if (fajrMinutes < ishaMinutes) fajrMinutes += 24*60;
  const nightDuration = fajrMinutes - ishaMinutes;
  const sleep1Start = ishaMinutes + 30;
  const halfNight = nightDuration/2;
  const sleep1End = sleep1Start + halfNight;
  const thirdNight = nightDuration/3;
  const qiyamEnd = sleep1End + thirdNight;
  const sleep2Start = qiyamEnd;
  const fmt = mins=>{
    let m = mins % (24*60);
    const h = Math.floor(m/60), mm = Math.round(m%60);
    return `${String(h).padStart(2,'0')}:${String(mm).padStart(2,'0')}`;
  };
  return {
    sleep1Start: fmt(sleep1Start),
    sleep1End: fmt(sleep1End),
    qiyamStart: fmt(sleep1End),
    qiyamEnd: fmt(qiyamEnd),
    sleep2Start: fmt(sleep2Start),
    sleep2End: fajrTime,
    nightDuration: Math.round(nightDuration/60*10)/10
  };
}

// Grid/List Views
function createGridView(){
  const grid = document.getElementById('calendarGrid');
  grid.innerHTML = '';
  schedule.forEach(day=>{
    const cell = document.createElement('div');
    const hasNotes = notesData[day.date] && notesData[day.date].trim() !== '';
    cell.className = `grid-cell ${day.fasting?'fasting':''} ${day.gym?'gym':''} ${hasNotes?'has-notes':''}`;
    cell.onclick = ()=>openExpanded(day.date);

    const badges = [];
    if (day.fasting) badges.push(`<div class="mini-badge fasting">${t('badge_fast36')}</div>`);
    if (day.gym) badges.push(`<div class="mini-badge gym">${t('badge_gym')}</div>`);

    cell.innerHTML = `
      <div>
        <div class="cell-day">${day.day}</div>
        <div class="cell-date">${day.date}</div>
      </div>
      <div class="cell-badges">${badges.join('')}</div>
    `;
    grid.appendChild(cell);
  });
}
function createListView(){
  const listView = document.getElementById('listView');
  listView.innerHTML = '';
  for (let i=0;i<schedule.length;i+=7){
    const weekSection = document.createElement('div');
    weekSection.className = 'week-section';

    const weekHeader = document.createElement('div');
    weekHeader.className = 'week-header';
    weekHeader.textContent = `${t('week_label')} ${Math.floor(i/7)+1}`;
    weekSection.appendChild(weekHeader);

    const weekGrid = document.createElement('div');
    weekGrid.className = 'week-grid';

    schedule.slice(i,i+7).forEach(day=>{
      const card = createDayCard(day);
      weekGrid.appendChild(card);
    });

    weekSection.appendChild(weekGrid);
    listView.appendChild(weekSection);
  }
}
function createDayCard(day){
  const card = document.createElement('div');
  card.className = `day-card ${day.fasting?'fasting':''} ${day.gym?'gym':''}`;
  card.onclick = ()=>openExpanded(day.date);
  card.style.cursor = 'pointer';

  const prayers = prayerTimesCache[day.date] || { fajr:'05:30', isha:'20:50', maghrib:'19:30' };
  const hasNotes = notesData[day.date] && notesData[day.date].trim() !== '';

  const badges = [];
  if (day.gym) badges.push(`<span class="mini-badge gym">${t('badge_gym')}</span>`);
  if (day.fasting) badges.push(`<span class="mini-badge fasting" style="padding:8px 16px;">${t('badge_fast36')}</span>`);
  else badges.push(`<span class="mini-badge" style="background: var(--champagne); color: var(--royal-plum); padding:8px 16px;">${t('badge_feast')}</span>`);

  card.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-bottom:12px; border-bottom:2px solid var(--champagne);">
      <div style="font-family:'Amiri', serif; font-size:1.4rem; font-weight:700; color:var(--deep-purple);">${day.day}</div>
      <div style="background: var(--cream); padding:6px 14px; border-radius:20px; font-weight:600; color:var(--royal-plum);">${day.date}/${day.year}</div>
    </div>
    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:15px;">
      ${badges.join('')}
      ${hasNotes?`<span style="background: var(--sage); color:#fff; padding:6px 12px; border-radius:15px; font-size:.85rem; font-weight:600;">${t('saved')}</span>`:''}
    </div>
    <div style="background: linear-gradient(135deg, var(--cream) 0%, #fdfbf9 100%); padding:15px; border-radius:12px; font-size:.95rem; color:var(--royal-plum);">
      <div style="margin-bottom:6px;"><strong>${t('prayer_isha')}</strong> ${prayers.isha}</div>
      <div style="margin-bottom:6px;"><strong>${t('prayer_fajr')}</strong> ${prayers.fajr}</div>
      <div><strong>${t('prayer_maghrib')}</strong> ${prayers.maghrib}</div>
    </div>
  `;
  return card;
}

// Expanded View
function openExpanded(date){
  const day = schedule.find(d=>d.date===date);
  if (!day) return;
  const prayers = prayerTimesCache[date] || { fajr:'05:30', isha:'20:50', maghrib:'19:30' };
  const david = calculateDavidTimes(prayers.isha, prayers.fajr);
  const hasNotes = notesData[date] && notesData[date].trim() !== '';

  const [d,m] = date.split('/').map(v=>parseInt(v,10));
  const y = day.year;
  const startDate = new Date(y, m-1, d, 3, 40);
  const endDate = new Date(startDate.getTime() + 36*60*60*1000);
  const formatDMHM = (dt)=>`${String(dt.getDate()).padStart(2,'0')}/${String(dt.getMonth()+1).padStart(2,'0')} ${String(dt.getHours()).padStart(2,'0')}:${String(dt.getMinutes()).padStart(2,'0')}`;

  const fastingStart = formatDMHM(startDate);
  const fastingEnd   = formatDMHM(endDate);

  const badges = [];
  if (day.gym) badges.push(`<span class="mini-badge gym" style="padding:10px 20px; font-size:.95rem;">${t('badge_gym')}</span>`);
  if (day.fasting) badges.push(`<span class="mini-badge fasting" style="padding:10px 20px; font-size:.95rem;">${t('badge_fast36')}</span>`);
  else badges.push(`<span class="mini-badge" style="background: var(--champagne); color: var(--royal-plum); padding:10px 20px; font-size:.95rem;">${t('badge_feast')}</span>`);

  const content = `
    <div class="card-header">
      <h2 class="card-title">${day.day}</h2>
      <p class="card-date">${date}/${y}</p>
      <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-top:15px;">${badges.join('')}</div>
    </div>

    <div class="info-box">
      <div class="info-title">🕌 ${t('prayer_isha').replace(':','')} / ${t('prayer_fajr').replace(':','')} / ${t('prayer_maghrib').replace(':','')}</div>
      <div class="info-row"><span class="info-label">${t('prayer_isha').replace(':','')}</span><span class="info-value">${prayers.isha}</span></div>
      <div class="info-row"><span class="info-label">${t('prayer_fajr').replace(':','')}</span><span class="info-value">${prayers.fajr}</span></div>
      <div class="info-row"><span class="info-label">${t('prayer_maghrib').replace(':','')}</span><span class="info-value">${prayers.maghrib}</span></div>
    </div>

    <div class="info-box" style="background: linear-gradient(135deg, #f0f5ed 0%, #fdfbf9 100%); border-color: var(--sage);">
      <div class="info-title">${t('david_title')}</div>
      <div class="info-row"><span class="info-label">${t('sleep1')}</span><span class="info-value">${david.sleep1Start} - ${david.sleep1End}</span></div>
      <div class="info-row"><span class="info-label">${t('qiyam')}</span><span class="info-value">${david.qiyamStart} - ${david.qiyamEnd}</span></div>
      <div class="info-row"><span class="info-label">${t('sleep2')}</span><span class="info-value">${david.sleep2Start} - ${david.sleep2End}</span></div>
      <div style="text-align:center; margin-top:12px; padding-top:12px; border-top:1px solid var(--sage); color: var(--sage); font-style:italic;">
        ${t('night_duration')}: ${david.nightDuration} ${currentLang==='ar'?'ساعات':'hours'}
      </div>
    </div>

    ${day.fasting?`
      <div class="info-box" style="background: linear-gradient(135deg, #fef9f0 0%, #fdfbf9 100%); border-color: var(--rose-gold);">
        <div class="info-title">${t('fasting_info')}</div>
        <div class="info-row"><span class="info-label">${t('fast_start')}</span><span class="info-value">${fastingStart}</span></div>
        <div class="info-row"><span class="info-label">${t('fast_end')}</span><span class="info-value">${fastingEnd}</span></div>
      </div>
    `:''}

    <div class="notes-section">
      <div class="notes-header">
        <div class="notes-title"><span>📝</span><span>${t('diary_title').replace('📝 ','')}</span></div>
        <div class="save-indicator" id="saveIndicator-${date}" style="display:${hasNotes?'flex':'none'};">
          <span>✓</span><span>${t('saved_short')}</span>
        </div>
      </div>
      <textarea id="notes-${date}" data-date="${date}" placeholder="${t('diary_placeholder')}">${notesData[date]||''}</textarea>
    </div>
  `;
  document.getElementById('expandedContent').innerHTML = content;
  document.getElementById('expandedView').classList.add('active');

  const textarea = document.getElementById(`notes-${date}`);
  let saveTimeout;
  textarea.addEventListener('input', function(){
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(()=>{
      if (this.value.trim()===''){
        delete notesData[this.dataset.date];
        document.getElementById(`saveIndicator-${date}`).style.display='none';
      }else{
        notesData[this.dataset.date] = this.value;
        document.getElementById(`saveIndicator-${date}`).style.display='flex';
      }
      saveNotes(); createGridView(); createListView();
    }, 800);
  });
}
function closeExpanded(){
  document.getElementById('expandedView').classList.remove('active');
}
function switchView(view){
  const gridView = document.getElementById('calendarGrid');
  const listView = document.getElementById('listView');
  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(b=>b.classList.remove('active'));
  if (view==='grid'){
    gridView.style.display='grid';
    listView.classList.remove('active');
    document.getElementById('btnGrid').classList.add('active');
  }else{
    gridView.style.display='none';
    listView.classList.add('active');
    document.getElementById('btnList').classList.add('active');
  }
}

// Adhan Scheduling
function clearAllAdhanTimers(){ for (const t of scheduledTimers) clearTimeout(t.id); scheduledTimers=[]; }
function getTzParts(date, timeZone){
  const dtf = new Intl.DateTimeFormat('en-US',{ timeZone, hour12:false, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit' });
  const parts = dtf.formatToParts(date); const map={}; for (const p of parts) map[p.type]=p.value;
  return { year:+map.year, month:+map.month, day:+map.day, hour:+map.hour, minute:+map.minute, second:+map.second };
}
function getTimeZoneOffset(date, timeZone){
  const dtf = new Intl.DateTimeFormat('en-US',{ timeZone, hour12:false, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit' });
  const parts = dtf.formatToParts(date); const map={}; for (const p of parts) map[p.type]=p.value;
  const asUTC = Date.UTC(map.year, map.month-1, map.day, map.hour, map.minute, map.second);
  return asUTC - date.getTime();
}
function zonedWallTimeToUtc(year, month, day, hour, minute, timeZone){
  const guess = new Date(Date.UTC(year, month-1, day, hour, minute, 0));
  const offset = getTimeZoneOffset(guess, timeZone);
  return new Date(guess.getTime() - offset);
}
async function scheduleAdhans(){
  clearAllAdhanTimers();
  const tz = settings.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();
  const nowParts = getTzParts(now, tz);
  const todayStr = `${String(nowParts.day).padStart(2,'0')}/${String(nowParts.month).padStart(2,'0')}/${nowParts.year}`;
  const { times: todayTimes, timezone } = await fetchPrayerTimesWithMeta(todayStr, settings.latitude, settings.longitude, settings.calculationMethod);
  const effectiveTz = timezone || tz;

  const tomorrowNoonUTC = zonedWallTimeToUtc(nowParts.year, nowParts.month, nowParts.day, 12, 0, effectiveTz);
  const tomorrowLocal = new Date(tomorrowNoonUTC.getTime() + 24*60*60*1000);
  const tmParts = getTzParts(tomorrowLocal, effectiveTz);
  const tomorrowStr = `${String(tmParts.day).padStart(2,'0')}/${String(tmParts.month).padStart(2,'0')}/${tmParts.year}`;
  const { times: tomorrowTimes } = await fetchPrayerTimesWithMeta(tomorrowStr, settings.latitude, settings.longitude, settings.calculationMethod);

  const prayersOrder = [
    { key:'fajr', label: currentLang==='ar'?'الفجر':'Fajr' },
    { key:'dhuhr', label: currentLang==='ar'?'الظهر':'Dhuhr' },
    { key:'asr', label: currentLang==='ar'?'العصر':'Asr' },
    { key:'maghrib', label: currentLang==='ar'?'المغرب':'Maghrib' },
    { key:'isha', label: currentLang==='ar'?'العشاء':'Isha' }
  ];

  function scheduleForDay(parts, times, dayLabelKey){
    for (const p of prayersOrder){
      const [h,m] = (times[p.key] || '00:00').split(':').map(Number);
      const targetUTC = zonedWallTimeToUtc(parts.year, parts.month, parts.day, h, m, effectiveTz);
      const delay = targetUTC.getTime() - Date.now();
      if (delay > 0){
        const id = setTimeout(()=>{
          const title = t('time_for_prayer', p.label, settings.city);
          const body  = t('time_label', `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`, t(dayLabelKey));
          showBrowserNotification(title, body);
          playAdhan();
        }, delay);
        scheduledTimers.push({ id, label:p.label, at:targetUTC });
      }
    }
  }
  scheduleForDay(nowParts, todayTimes, 'today');
  scheduleForDay(tmParts, tomorrowTimes, 'tomorrow');

  const nextRescheduleUTC = zonedWallTimeToUtc(tmParts.year, tmParts.month, tmParts.day, 0, 5, effectiveTz);
  const ms = nextRescheduleUTC.getTime() - Date.now();
  const resId = setTimeout(()=>scheduleAdhans().catch(console.error), Math.max(1000, ms));
  scheduledTimers.push({ id:resId, label:'reschedule', at:nextRescheduleUTC });
}

// City Autocomplete
let citySuggestionsData = [];
let cityActiveIndex = -1;
let cityAbortController = null;
const debouncedFetchCities = debounce(fetchCitySuggestions, 300);

async function handleCityInput(e){
  const q = e.target.value.trim();
  const country = document.getElementById('countrySelect').value;
  if (!q){ hideCitySuggestions(); return; }
  debouncedFetchCities(q, country);
}
function handleCityKeydown(e){
  const list = document.getElementById('citySuggestions');
  const items = list.querySelectorAll('.suggestion-item');
  if (!items.length || list.style.display!=='block') return;
  if (e.key==='ArrowDown'){
    e.preventDefault();
    cityActiveIndex = (cityActiveIndex+1)>=items.length?0:cityActiveIndex+1;
    updateActiveSuggestion();
  } else if (e.key==='ArrowUp'){
    e.preventDefault();
    cityActiveIndex = (cityActiveIndex-1)<0?items.length-1:cityActiveIndex-1;
    updateActiveSuggestion();
  } else if (e.key==='Enter'){
    e.preventDefault();
    if (cityActiveIndex>=0) selectCitySuggestion(cityActiveIndex);
    else if (items.length) selectCitySuggestion(0);
  } else if (e.key==='Escape'){ hideCitySuggestions(); }
}
function updateActiveSuggestion(){
  const list = document.getElementById('citySuggestions');
  const items = list.querySelectorAll('.suggestion-item');
  items.forEach((el,idx)=>el.classList.toggle('active', idx===cityActiveIndex));
  if (cityActiveIndex>=0 && items[cityActiveIndex]){
    const activeEl = items[cityActiveIndex], container = list;
    const top = activeEl.offsetTop, bottom = top + activeEl.offsetHeight;
    if (top < container.scrollTop) container.scrollTop = top;
    else if (bottom > container.scrollTop + container.clientHeight) container.scrollTop = bottom - container.clientHeight;
  }
}
async function fetchCitySuggestions(query, countryCode){
  try{
    if (cityAbortController) cityAbortController.abort();
    cityAbortController = new AbortController();
    const ccParam = countryCode?`&countrycodes=${countryCode.toLowerCase()}`:'';
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=8&accept-language=${currentLang==='ar'?'ar,en':'en,ar'}&q=${encodeURIComponent(query)}${ccParam}`;
    const res = await fetch(url, { signal: cityAbortController.signal, headers:{'User-Agent':'Davidic-Fasting-App/1.0'} });
    if (!res.ok) throw new Error('cities fetch failed');
    const data = await res.json();
    citySuggestionsData = (data||[]).map(item=>{
      const addr = item.address || {};
      const city = addr.city || addr.town || addr.village || addr.hamlet || addr.municipality || item.name || query;
      const state = addr.state || addr.region || addr.county || '';
      const country = addr.country || '';
      const country_code = (addr.country_code||'').toUpperCase();
      return { display:item.display_name, city, state, country, country_code, lat:+item.lat, lon:+item.lon };
    });
    renderCitySuggestions(citySuggestionsData);
  }catch(e){ if (e.name!=='AbortError') console.warn('City suggestions error:', e); }
}
function renderCitySuggestions(items){
  const list = document.getElementById('citySuggestions');
  cityActiveIndex = -1;
  if (!items.length){ hideCitySuggestions(); return; }
  list.innerHTML = items.map((it, idx)=>`
    <div class="suggestion-item" data-index="${idx}" onclick="selectCitySuggestion(${idx})">
      <div class="sugg-title">${it.city}${it.state?`، ${it.state}`:''}</div>
      <div class="sugg-sub">${it.country} • ${it.lat.toFixed(4)}, ${it.lon.toFixed(4)}</div>
    </div>
  `).join('');
  list.style.display='block';
}
function hideCitySuggestions(){
  const list = document.getElementById('citySuggestions');
  list.style.display='none'; list.innerHTML=''; cityActiveIndex=-1;
}
function selectCitySuggestion(index){
  const it = citySuggestionsData[index]; if (!it) return;
  const cityInput = document.getElementById('cityInput');
  const latInput = document.getElementById('latitudeInput');
  const lonInput = document.getElementById('longitudeInput');
  const countrySelect = document.getElementById('countrySelect');
  cityInput.value = it.city;
  latInput.value = it.lat.toFixed(4);
  lonInput.value = it.lon.toFixed(4);
  if (it.country_code) countrySelect.value = it.country_code;

  settings.city = it.city;
  settings.latitude = it.lat;
  settings.longitude = it.lon;
  if (it.country_code) settings.country = it.country_code;

  hideCitySuggestions();
  showToast(t('city_found', it.city, it.country));
}
document.addEventListener('click', (e)=>{
  const wrap = document.querySelector('.autocomplete-wrap');
  const list = document.getElementById('citySuggestions');
  if (!wrap) return;
  if (!wrap.contains(e.target)) hideCitySuggestions();
});

// Init & Listeners
async function init(){
  loadSettings(); loadNotes();
  currentLang = settings.lang || 'ar';
  applyTranslations();

  // Bind language buttons
  document.getElementById('langAr').onclick = ()=>setLanguage('ar');
  document.getElementById('langEn').onclick = ()=>setLanguage('en');
  const audio = document.getElementById('adhanAudio');
  audio.volume = Number(settings.adhanVolume) || 1;
  if (settings.adhanSrc) audio.src = settings.adhanSrc;
  audio.addEventListener('ended', ()=>{ adhanIsPlaying=false; document.getElementById('stopAdhanBtn').style.display='none'; });

  if (!settings.startDate || !settings.latitude){
    await detectLocation();
    openSettings();
  } else {
    updateLocationDisplay();
    await loadCountries(); // ensure country names match currentLang
    await generateSchedule();
  }
}
document.addEventListener('visibilitychange', ()=>{ if (!document.hidden) scheduleAdhans().catch(console.error); });
document.addEventListener('keydown', function(e){
  if (e.key==='Escape'){
    closeExpanded();
    if (document.getElementById('settingsModal').classList.contains('active')) closeSettings();
  }
});
document.getElementById('expandedView').addEventListener('click', function(e){ if (e.target===this) closeExpanded(); });
document.getElementById('settingsModal').addEventListener('click', function(e){ if (e.target===this) closeSettings(); });

// Start
init();
