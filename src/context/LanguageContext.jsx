import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  mr: {
    // Header & Navigation
    nav: {
      brandName: 'बोलती पुस्तके',
      tagline: 'मराठी साहित्याचा आवाज',
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याविषयी',
      journey: 'आमचा प्रवास',
      literature: 'साहित्य संग्रह',
      mission: 'आमचे ध्येय',
      contact: 'संपर्क',
      sitemap: 'साईटमॅप',
      cta: 'सहभागी व्हा',
      channel1: 'बोलती पुस्तके',
      channel2: 'साहित्यरत्न चॅनेल'
    },
    // Hero Section
    hero: {
      tag: 'बोलती पुस्तके',
      tagline: '"जेव्हा पुस्तके बोलू लागतात.."',
      titlePart1: 'मराठी साहित्याचा',
      titleHighlight: 'निनादणारा सूर',
      titlePart2: ', आता प्रत्येक घरात...',
      desc: 'कथा आणि कादंबऱ्यांच्या ऑडिओबुकच्या माध्यमातून एक सोनेरी प्रवास. महाराष्ट्राचा समृद्ध आणि गौरवशाली साहित्यिक वारसा जपणारा प्रत्येक मराठी मनाचा हक्काचा डिजिटल कट्टा.',
      ytBtn: 'युट्युबवर ऐका',
      aboutBtn: 'आमच्याविषयी',
      narrationStatus: 'अभिवाचन सुरू आहे...'
    },
    // About Section
    about: {
      storyTag: 'आमची कहाणी',
      title: 'साहित्याचा नवा प्रकाश',
      p1: 'कोरोनाच्या लॉकडाऊनच्या कठीण आणि एकाकी काळात बोलती पुस्तके या YouTube वाहिनीची सुरुवात झाली. हा केवळ एक तांत्रिक उपक्रम नाही, तर मराठी साहित्यप्रेमींना आणि मातृभाषेचा वारसा जपणाऱ्यांना जोडणारा एक नितांत भावनिक पूल आहे.',
      p2: 'घरातील कोंडलेल्या वातावरणात साहित्याचा गारवा घेऊन आम्ही आलो आणि पाहता पाहता हजारो मराठी मनांना आमचा आवाज आपलासा वाटू लागला. आज विविध वयोगटांतील आणि स्तरांतील लोक आमच्याशी जोडले गेले आहेत.',
      inclusiveTitle: 'सर्वसमावेशक समाज',
      inclusiveDesc: 'शेतकरी, गृहिणी, जवान आणि विद्यार्थ्यांचे हक्काचे विचारपीठ.',
      emotionalTitle: 'भावनिक बांधिलकी',
      emotionalDesc: 'अभिवाचनातून निर्माण होणारे श्रोते आणि लेखकांमधील अतूट नाते.',
      founderName: 'दशरथ पाटील',
      founderRole: 'अभिवाचक आणि संस्थापक | बोलती पुस्तके',
      inspirationTag: 'प्रेरणादायी क्षण',
      quote: '“अभिवाचन खूप सुंदर आहे! तुमच्या या प्रयत्नांमुळे आमच्यासारख्या अंध आणि वाचू न शकणाऱ्या लोकांसाठी मराठी साहित्याचा सुवर्ण खजिना कायमचा खुला झाला आहे...”',
      quoteAuthor: '— अंध आणि वाचक मित्रमैत्रिणींचे पहिले फोन कॉल्स',
      quoteSub: 'ज्या क्षणाने आमच्या प्रवासाची खऱ्या अर्थाने दिशा निश्चित केली.'
    },
    // Stats Section
    stats: {
      stat1Num: '३००+',
      stat1Label: 'मराठी कादंबऱ्यांचे अभिवाचन',
      stat1Desc: 'प्रदीर्घ आणि सुप्रसिद्ध कादंबऱ्या श्रोत्यांसाठी ऑडिओ स्वरूपात.',
      stat2Num: '५०००+',
      stat2Label: 'कथांचे दर्जेदार वाचन',
      stat2Desc: 'लघुकथा, सामाजिक कथा आणि ललित लेख यांचा समावेश.',
      stat3Num: 'लाखो',
      stat3Label: 'सदाबहार रसिक श्रोते',
      stat3Desc: 'जगभरातील मराठी मनांना साहित्याशी जोडणारे अथांग व्यासपीठ.',
      stat4Num: 'अनेक',
      stat4Label: 'प्रतिष्ठित लेखक व प्रकाशक',
      stat4Desc: 'अभिजात आणि ज्येष्ठ लेखकांपासून ते नवोदित साहित्यिकांपर्यंत.'
    },
    // Journey Section
    journey: {
      tag: 'कालक्रम',
      title: 'आमचा प्रवास आणि ध्यास',
      steps: [
        {
          year: '२०२०',
          title: 'चळवळीची सुरुवात (लॉकडाऊन)',
          description: 'कोरोना टाळेबंदीच्या कठीण दिवसांमध्ये नैराश्यावर मात करण्यासाठी आणि मराठी साहित्याचा गोडवा घराघरांमध्ये पोहोचवण्यासाठी YouTube चॅनलची स्थापना करण्यात आली.'
        },
        {
          year: '२०२१',
          title: 'प्रेरणादायी वळण',
          description: 'काही अशिक्षित आणि दृष्टिहीन बांधवांनी आवर्जून फोन करून अभिवाचनाचे कौतुक केले. “तुमच्या आवाजामुळे साहित्याचा खजिना खुला झाला” या शब्दांनी आम्हाला आमचे जीवनध्येय दिले.'
        },
        {
          year: '२०२२ - २०२३',
          title: 'सर्वसमावेशक विस्तार',
          description: 'शेतकरी, गृहिणी, कार्यालयात जाणारे कर्मचारी, देशाचे रक्षण करणारे वीर जवान अशा सर्व थरांतील रसिक श्रोते जोडले गेले. ३०० पेक्षा अधिक कादंबऱ्यांचे अभिवाचन वाहिनीवर उपलब्ध झाले.'
        },
        {
          year: '२०२४ - २०२६ (स्वप्न)',
          title: 'स्वतंत्र ऑडिओबुक ॲप',
          description: 'लेखक आणि प्रकाशकांच्या अधिकारांचा व रॉयल्टीचा सन्मान ठेवून, व्यावसायिक पातळीवर एक अद्ययावत मराठी ऑडिओबुक डिजिटल ॲप विकसित करण्याचा संकल्प.'
        }
      ]
    },
    // Mission & Vision
    missionVision: {
      tag: 'उद्दिष्ट्ये',
      title: 'ध्येय आणि संकल्पना',
      missionTitle: 'आमचे ध्येय (Mission)',
      missionDesc: 'दर्जेदार मराठी साहित्याची आणि बोलीभाषेची गोडी तरुण पिढीमध्ये रुजवणे. काळाच्या ओघात विस्मरणात चाललेला हा अभिजात ठेवा डिजिटल ऑडिओबुक्सच्या स्वरूपात जागतिक पातळीवर प्रत्येक मराठी घरापर्यंत सहज आणि विनामूल्य उपलब्ध करून देणे.',
      missionFooter: 'भाषा समृद्धी हाच आमचा ध्यास',
      visionTitle: 'आमचे स्वप्न (Vision)',
      visionDesc: 'लेखक, प्रकाशक आणि श्रोते यांना जोडणारी एक अद्ययावत मराठी ऑडिओबुक डिजिटल परिसंस्था (App) उभी करणे. याद्वारे लेखकांच्या हक्कांचे व रॉयल्टीचे सन्मानपूर्वक संरक्षण करून मराठी साहित्याला व्यावसायिकदृष्ट्या सक्षम करणे.',
      visionFooter: 'डिजिटल युगात मराठी साहित्याचा गौरव'
    },
    // Why Us
    whyUs: {
      tag: 'खासियत',
      title: 'बोलती पुस्तके का निवडावीत?',
      subtitle: 'साहित्याची गोडी वाढवणारे आणि प्रत्येकाला सामावून घेणारे आमचे प्रमुख गुणविशेष.',
      features: [
        {
          title: 'अस्सल व भावपूर्ण अभिवाचन',
          description: 'दशरथ पाटील यांच्या भारदस्त, स्पष्ट आणि भावनाप्रधान आवाजात प्रत्येक व्यक्तिरेखा जिवंत होते, ज्यामुळे श्रोते थेट कथेशी जोडले जातात.'
        },
        {
          title: 'ग्रामीण व बोलीभाषेचा आदर',
          description: 'अस्सल मातीतील मराठी आणि ग्रामीण बोली भाषेतील साहित्य ऐकवण्यावर आमचा विशेष भर असतो, ज्याला श्रोत्यांचा उदंड प्रतिसाद मिळतो.'
        },
        {
          title: 'सांस्कृतिक वारशाचे जतन',
          description: 'काळाच्या ओघात विस्मरणात गेलेल्या जुन्या दर्जेदार कथा आणि दुर्मिळ कादंबऱ्या ऑडिओ स्वरूपात आणून आम्ही भाषेचा ऐतिहासिक ठेवा जपतो.'
        },
        {
          title: 'दृष्टिहीन बांधवांसाठी उपयुक्त',
          description: 'वाचण्याची क्षमता नसलेल्या आणि अंध साहित्यप्रेमी मित्रांना समृद्ध मराठी साहित्य सहज ऐकता यावे यासाठी आमचे व्यासपीठ पूर्णपणे समर्पित आहे.'
        }
      ]
    },
    // Literature
    literature: {
      tag: 'साहित्य संग्रह',
      title: 'आमचे प्रमुख साहित्य आणि लेखक',
      subtitle: 'महाराष्ट्राचे विचारविश्व समृद्ध करणाऱ्या काही सुप्रसिद्ध आत्मकथा आणि ज्येष्ठ कथाकारांचे साहित्य',
      fullAvailable: 'पूर्ण अभिवाचन उपलब्ध',
      listen: 'ऐका',
      byAuthor: 'लेखक:',
      authorsTitle: 'ज्येष्ठ व अभिजात साहित्यिक',
      authorsSubtitle: 'आमच्या वाहिनीवर इतर अनेक दिग्गज लेखकांचे दर्जेदार साहित्य ऐकायला मिळेल:',
      primaryWorks: [
        {
          title: 'उचल्या',
          author: 'लक्ष्मण गायकवाड',
          category: 'आत्मचरित्र',
          desc: 'उपेक्षित, भटक्या आणि विमुक्त समाजाचे जळजळीत सामाजिक वास्तव मांडणारे आणि त्यांच्या वेदनेला वाचा फोडणारे एक अत्यंत प्रभावी, पुरस्कारप्राप्त आत्मचरित्र.',
          tag: 'अस्सल समाजचित्रण'
        },
        {
          title: 'आक्करमाशी',
          author: 'शरणकुमार लिंबाळे',
          category: 'आत्मचरित्र',
          desc: 'दलित साहित्यातील एक महत्त्वाचा मैलाचा दगड. तीव्र सामाजिक जाणिवा, तीव्र मानवी संघर्ष आणि अस्तित्वाची लढाई मांडणारी दिशादर्शक गाथा.',
          tag: 'संघर्षाची धारदार गाथा'
        },
        {
          title: 'आयदान',
          author: 'उर्मिला पवार',
          category: 'आत्मचरित्र',
          desc: 'दलित स्त्रीचे भावविश्व, तिची सहनशीलता आणि पुरुषप्रधान व जातिप्रधान व्यवस्थेविरुद्ध तिने दिलेला लढा रेखाटणारा एक संवेदनशील जीवनप्रवास.',
          tag: 'स्त्री जाणिवांचा प्रवास'
        }
      ],
      authors: [
        {
          name: 'जयवंत दळवी',
          role: 'अजरामर कादंबरीकार व नाटककार',
          desc: 'मानवी स्वभाव, नात्यांमधील गुंतागुंत आणि सामाजिक व्यंगांवर उपरोधिक शैलीत लिहिणारे मराठीतील दिग्गज साहित्यिक.'
        },
        {
          name: 'ह. मो. मराठे',
          role: 'प्रतिभावंत लेखक व ज्येष्ठ संपादक',
          desc: 'मराठी कथा आणि कादंबरी विश्वात स्वतःची वेगळी शैली निर्माण करणारे, वाचकांच्या मनावर अधिराज्य गाजवणारे लेखक.'
        }
      ]
    },
    // Support CTA
    supportCTA: {
      quote1: '"साहित्य जपलं तर भाषा जपली जाईल..."',
      quote2: '"...भाषा जपली तर संस्कृती जिवंत राहील!"',
      desc: 'मराठी साहित्याचा प्रसार आणि प्रचार करण्यासाठी आमच्या या उपक्रमाला आपला अमूल्य पाठिंबा द्या. आपल्या मातृभाषेसाठी आणि तिच्या संवर्धनासाठी आपण एवढं तरी नक्की करू शकतो. चला, एकत्र येऊया आणि मराठी साहित्याचा हा दीप अधिकाधिक घरांपर्यंत पोहोचवूया!',
      ch1Title: 'बोलती पुस्तके',
      ch1Desc: 'अभिजात मराठी कादंबऱ्या आणि नामवंत लेखकांची प्रभावी आत्मचरित्रे ऐकण्यासाठी सबस्क्राईब करा.',
      ch2Title: 'साहित्यरत्न',
      ch2Desc: 'मराठी लघुकथा, सुंदर ललित लेख आणि निवडक मराठी कवितांचे अभिवाचन अनुभवण्यासाठी सबस्क्राईब करा.',
      subBtn: 'सबस्क्राईब करा',
      freeNote: '* ही साहित्य चळवळ पूर्णपणे विनामूल्य आहे. आपला एक सबस्क्राईब मातृभाषेची समृद्धी टिकवून ठेवण्यास मोलाचे सहकार्य करेल.'
    },
    // Contact Section
    contact: {
      tag: 'संपर्क',
      title: 'आमच्याशी संपर्क साधा',
      subtitle: 'तुमच्या काही शंका, अभिप्राय किंवा सहकार्यासाठी आम्हाला कधीही कळवा.',
      infoTitle: 'संपर्क माहिती',
      emailLabel: 'ईमेल पत्ता',
      phoneLabel: 'फोन / व्हॉट्सॲप',
      clickToChat: 'थेट चर्चा करण्यासाठी क्लिक करा',
      founderRole: 'अभिवाचक आणि संस्थापक | बोलती पुस्तके',
      formTitle: 'संदेश पाठवा',
      nameLabel: 'तुमचे नाव',
      namePlaceholder: 'उदा. राहुल चव्हाण',
      phoneInputLabel: 'तुमचा फोन नंबर',
      phonePlaceholder: 'उदा. 9960120521',
      emailInputLabel: 'तुमचा ईमेल',
      emailPlaceholder: 'उदा. rahul@example.com',
      subjectLabel: 'विषय',
      subjectPlaceholder: 'उदा. सहकार्याबद्दल / अभिप्राय',
      messageLabel: 'तुमचा संदेश',
      messagePlaceholder: 'तुमचा संदेश येथे लिहा...',
      sending: 'पाठवत आहे...',
      sendBtn: 'संदेश पाठवा',
      successMsg: 'धन्यवाद! तुमचा संदेश यशस्वीरीत्या पाठवला गेला आहे.',
      errorMsg: 'दिलगीर आहोत! संदेश पाठवताना अडचण आली. कृपया नंतर प्रयत्न करा किंवा ईमेल/व्हॉट्सॲप द्वारे संपर्क करा.'
    },
    // FAQ Section
    faq: {
      tag: 'प्रश्नोत्तरे',
      title: 'नेहमी विचारले जाणारे प्रश्न (FAQ)',
      subtitle: 'बोलती पुस्तके उपक्रमाविषयी थोडक्यात माहिती',
      q1: 'बोलती पुस्तके म्हणजे काय? (What is Bolati Pustake?)',
      a1: 'बोलती पुस्तके ही मराठी साहित्याचा प्रसार करण्यासाठी आणि दृष्टिहीन तसेच साहित्यप्रेमी बांधवांसाठी दर्जेदार ऑडिओबुक्स, कादंबऱ्या व कथांचे सुश्राव्य अभिवाचन पुरवणारी एक प्रमुख सांस्कृतिक व भावनिक चळवळ आहे.',
      q2: 'बोलती पुस्तके वर कोणती पुस्तके उपलब्ध आहेत?',
      a2: 'बोलती पुस्तके डिजिटल प्लॅटफॉर्मवर ३००+ हून अधिक प्रसिद्ध मराठी कादंबऱ्या आणि ५०००+ हून अधिक लघुकथांचे उत्कृष्ट अभिवाचन उपलब्ध आहे.',
      q3: 'बोलती पुस्तके चळवळीचे संस्थापक कोण आहेत?',
      a3: 'बोलती पुस्तके या उपक्रमाची सुरुवात कोरोना काळातील टाळेबंदीदरम्यान ज्येष्ठ अभिवाचक श्री. दशरथ पाटील यांच्या कल्पकतेतून व पुढाकारातून झाली.',
      q4: 'बोलती पुस्तके कसे ऐकायचे?',
      a4: 'तुम्ही आमचे अधिकृत संकेतस्थळ (bolatipustake.in) आणि YouTube चॅनेल्स (@bolati_pustake) द्वारे विनामूल्य सर्व ऑडिओबुक्स ऐकू शकता.'
    },
    // Sitemap Section
    sitemap: {
      tag: 'संरचना आणि मार्गदर्शिका',
      title: 'वेबसाईट साईटमॅप आणि रचना',
      subtitle: 'आमच्या डिजिटल व्यासपीठाची संपूर्ण रचना आणि तांत्रिक वैशिष्ट्ये एकाच ठिकाणी पहा.',
      tabVisual: 'रचनात्मक साईटमॅप',
      tabTech: 'तांत्रिक माहिती',
      visitLink: 'भेट द्या',
      policyTitle: 'उपयुक्त धोरणे व लिंक्स',
      techSpecsTitle: 'विकास रचना वैशिष्ट्ये (System Specs)',
      sections: {
        home: { name: 'मुख्यपृष्ठ (Home)', desc: 'परिचय आणि मुख्य चॅनेल लिंक्स', details: 'बोलती पुस्तके चळवळीचा परिचय, प्रमुख ऑडिओबुक चॅनेलच्या लिंक्स आणि मुखपृष्ठ.' },
        about: { name: 'आमच्याविषयी (About Us)', desc: 'चळवळीची कहाणी आणि संस्थापक', details: 'लॉकडाऊनमधील सुरुवात, दशरथ पाटील (अभिवाचक व संस्थापक) यांचा परिचय आणि श्रोत्यांचे अनुभव.' },
        stats: { name: 'आकडेवारी (Stats)', desc: 'प्रसार आणि प्रभाव आकडेवारी', details: '३००+ कादंबऱ्या, ५०००+ कथा, १५,०००+ श्रोते आणि विनामूल्य शिक्षणाचा प्रसार.' },
        journey: { name: 'आमचा प्रवास (Journey)', desc: 'चळवळीची टाइमलाईन', details: '२०२० च्या लॉकडाऊनपासून ते आजपर्यंतच्या यशस्वी प्रवासाचे प्रमुख टप्पे.' },
        mission: { name: 'ध्येय आणि उद्दिष्टे (Mission)', desc: 'उद्दिष्टे आणि संस्कृती', details: 'मराठी भाषा आणि साहित्याचा डिजिटल माध्यमातून जगभर प्रसार करण्याचे आमचे ध्येय.' },
        whyUs: { name: 'खासियत (Why Us)', desc: 'अभिवाचनाचे वैशिष्ट्ये', details: 'अस्सल बोलीभाषा, उत्कृष्ट आवाज गुणवत्ता, दुर्मिळ ग्रंथांचे जतन आणि दृष्टिहीन बांधवांसाठी उपयुक्तता.' },
        literature: { name: 'साहित्य संग्रह (Literature)', desc: 'लेखक व साहित्य सूची', details: 'लक्ष्मण गायकवाड, शरणकुमार लिंबाळे, उर्मिला पवार यांसारख्या थोर लेखकांच्या साहित्याचे ऑडिओ स्वरूप.' },
        support: { name: 'सहभागी व्हा (Support)', desc: 'चळवळीत सहभाग', details: 'श्रोते व वाचक म्हणून बोलती पुस्तके चळवळीला सहकार्य आणि प्रसाराचे आवाहन.' },
        contact: { name: 'संपर्क (Contact)', desc: 'संपर्क फॉर्म व सोशल लिंक्स', details: 'थेट संपर्क साधण्यासाठी फॉर्म, ई-मेल, व्हॉट्सॲप आणि युट्युब चॅनेलचे लिंक्स.' }
      },
      policies: [
        { name: 'गोपनीयता धोरण (Privacy Policy)', desc: 'वापरकर्त्यांच्या डेटाचे संरक्षण व गोपनीयता नियम.' },
        { name: 'नियम आणि शर्ती (Terms & Conditions)', desc: 'वेबसाईट आणि चॅनेल वापरण्याचे मार्गदर्शक नियम.' }
      ],
      techFeatures: [
        { title: 'सिंगल-पेज आर्किटेक्चर (SPA)', desc: 'रिएक्ट आणि लाईटवेट राउटिंगचा वापर करून अखंडित व जलद अनुभव.' },
        { title: 'पूर्णपणे रिस्पॉन्सिव्ह डिझाइन', desc: 'मोबाईल, टॅब्लेट आणि कॉम्प्युटर अशा सर्व आकारांच्या स्क्रीनवर उत्कृष्ट सादरीकरण.' },
        { title: 'अँक्सेसिबिलिटी आणि सुलभता', desc: 'दृष्टिहीन आणि ज्येष्ठ श्रोत्यांच्या सुलभतेसाठी सुवाच्य फॉन्ट आणि सोपी नेव्हिगेशन रचना.' },
        { title: 'वेगवान परफॉर्मन्स (Vite)', desc: 'Vite द्वारे ऑप्टिमाइझ केलेले कोड बंडल आणि जलद लोडिंग गती.' }
      ]
    },
    // Footer Section
    footer: {
      desc: "'बोलती पुस्तके' ही केवळ एक ऑडिओबुक वाहिनी नसून, ती मराठी साहित्याची आवड जपणाऱ्या जगभरातील लाखो मराठी माणसांना एकत्र जोडणारा एक भावनिक व सांस्कृतिक सेतू आहे.",
      navTitle: 'नेव्हिगेशन',
      policyTitle: 'धोरण आणि नियम',
      privacyPolicy: 'गोपनीयता धोरण (Privacy Policy)',
      terms: 'नियम आणि शर्ती (Terms & Conditions)',
      rights: 'सर्व हक्क राखीव.',
      founderFooter: 'अभिवाचक: दशरथ पाटील | बोलती पुस्तके YouTube चळवळ'
    }
  },

  en: {
    // Header & Navigation
    nav: {
      brandName: 'Bolati Pustake',
      tagline: 'The Voice of Marathi Literature',
      home: 'Home',
      about: 'About Us',
      journey: 'Journey',
      literature: 'Literature',
      mission: 'Mission',
      contact: 'Contact',
      sitemap: 'Sitemap',
      cta: 'Get Involved',
      channel1: 'Bolati Pustake',
      channel2: 'Sahityaratna Channel'
    },
    // Hero Section
    hero: {
      tag: 'Bolati Pustake',
      tagline: '"When books begin to speak.."',
      titlePart1: 'Resonating Voice of',
      titleHighlight: 'Marathi Literature',
      titlePart2: ', now in every home...',
      desc: 'A golden journey through audiobooks of timeless stories and novels. A cherished digital hub preserving Maharashtra’s rich and glorious literary heritage for every heart.',
      ytBtn: 'Listen on YouTube',
      aboutBtn: 'About Us',
      narrationStatus: 'Narration Active...'
    },
    // About Section
    about: {
      storyTag: 'Our Story',
      title: 'A New Light in Literature',
      p1: 'During the challenging lockdown days of COVID-19, the Bolati Pustake YouTube channel was born. More than a technical project, it is a deeply emotional bridge connecting Marathi literature lovers and guardians of our mother tongue.',
      p2: 'Bringing literary comfort during isolating times, our voice resonated with thousands of listeners. Today, people from all age groups and walks of life stand connected with us.',
      inclusiveTitle: 'Inclusive Community',
      inclusiveDesc: 'A dedicated platform cherished by farmers, homemakers, soldiers, and students.',
      emotionalTitle: 'Emotional Bond',
      emotionalDesc: 'An unbreakable relationship forged between listeners and authors through narration.',
      founderName: 'Dasharath Patil',
      founderRole: 'Narrator & Founder | Bolati Pustake',
      inspirationTag: 'Inspirational Moment',
      quote: '“The narration is beautiful! Thanks to your efforts, a golden treasure of Marathi literature is permanently accessible to visually impaired and non-readers like us...”',
      quoteAuthor: '— Early calls from visually impaired and avid listener friends',
      quoteSub: 'The defining moment that gave our journey its true purpose.'
    },
    // Stats Section
    stats: {
      stat1Num: '300+',
      stat1Label: 'Marathi Novels Narrated',
      stat1Desc: 'Extensive and renowned novels brought to life in audio format.',
      stat2Num: '5000+',
      stat2Label: 'High-Quality Story Narrations',
      stat2Desc: 'Including short stories, social dramas, and literary essays.',
      stat3Num: 'Lakhs+',
      stat3Label: 'Evergreen Enthusiastic Listeners',
      stat3Desc: 'An expansive platform uniting Marathi minds across the globe.',
      stat4Num: 'Numerous',
      stat4Label: 'Renowned Authors & Publishers',
      stat4Desc: 'Ranging from legendary classics to contemporary authors.'
    },
    // Journey Section
    journey: {
      tag: 'Timeline',
      title: 'Our Journey & Vision',
      steps: [
        {
          year: '2020',
          title: 'The Beginning (Lockdown)',
          description: 'Founded during the COVID-19 lockdown to bring the warmth of Marathi literature into homes and overcome social isolation.'
        },
        {
          year: '2021',
          title: 'An Inspiring Turning Point',
          description: 'Visually impaired listeners called to share heartfelt gratitude: "Your voice unlocked a treasure of literature." This gave us our core life purpose.'
        },
        {
          year: '2022 - 2023',
          title: 'Inclusive Expansion',
          description: 'Connected listeners from all walks of life—farmers, homemakers, soldiers, and professionals. Over 300+ narrated novels made available on channel.'
        },
        {
          year: '2024 - 2026 (Vision)',
          title: 'Dedicated Audiobook App',
          description: 'Developing a modern Marathi Audiobook Mobile App that respects author rights, royalties, and delivers a professional listening experience.'
        }
      ]
    },
    // Mission & Vision
    missionVision: {
      tag: 'Objectives',
      title: 'Mission & Vision',
      missionTitle: 'Our Mission',
      missionDesc: 'To instill a passion for quality Marathi literature and regional dialects in the younger generation, making classical literary treasures freely accessible to every household worldwide via digital audiobooks.',
      missionFooter: 'Enriching our native language is our dedication',
      visionTitle: 'Our Vision',
      visionDesc: 'To build an advanced Marathi Audiobook Ecosystem (App) connecting authors, publishers, and listeners—ensuring fair royalties and empowering Marathi literature commercially.',
      visionFooter: 'Celebrating Marathi Literature in the Digital Era'
    },
    // Why Us
    whyUs: {
      tag: 'Highlights',
      title: 'Why Choose Bolati Pustake?',
      subtitle: 'Key features that enhance your literary journey and welcome everyone warmly.',
      features: [
        {
          title: 'Authentic & Expressive Narration',
          description: 'Dasharath Patil’s rich, clear, and expressive voice brings every character to life, deeply connecting listeners to the story.'
        },
        {
          title: 'Honor for Dialects & Rural Roots',
          description: 'Special focus on authentic rural Marathi and regional dialects, receiving immense appreciation from audiences.'
        },
        {
          title: 'Preservation of Cultural Heritage',
          description: 'Preserving rare classics and forgotten literary gems in high-quality audio format for future generations.'
        },
        {
          title: 'Empowerment for Visually Impaired',
          description: 'Fully dedicated to providing easy audiobook access to visually impaired literature lovers and non-readers.'
        }
      ]
    },
    // Literature
    literature: {
      tag: 'Literary Collection',
      title: 'Featured Literature & Authors',
      subtitle: 'Renowned autobiographies and timeless works by eminent authors enriching Maharashtra’s thought landscape.',
      fullAvailable: 'Full Narration Available',
      listen: 'Listen',
      byAuthor: 'Author:',
      authorsTitle: 'Eminent & Classical Authors',
      authorsSubtitle: 'Enjoy works from many iconic literary masters on our channel:',
      primaryWorks: [
        {
          title: 'Uchalya',
          author: 'Laxman Gaikwad',
          category: 'Autobiography',
          desc: 'An award-winning autobiography depicting the raw reality and struggles of marginalized and nomadic communities.',
          tag: 'Authentic Social Depiction'
        },
        {
          title: 'Aakkarmashi',
          author: 'Sharankumar Limbale',
          category: 'Autobiography',
          desc: 'A milestone in Dalit literature, portraying human endurance, social awareness, and the fight for identity.',
          tag: 'Story of Resilience'
        },
        {
          title: 'Aaydan',
          author: 'Urmila Pawar',
          category: 'Autobiography',
          desc: 'A poignant memoir highlighting female resilience and struggle against social and caste-based inequities.',
          tag: 'Journey of Empowerment'
        }
      ],
      authors: [
        {
          name: 'Jaywant Dalvi',
          role: 'Legendary Novelist & Playwright',
          desc: 'Celebrated author known for subtle human psychology, complex relationships, and insightful social satire.'
        },
        {
          name: 'H. M. Marathe',
          role: 'Prolific Author & Senior Editor',
          desc: 'Distinguished writer with a unique storytelling voice that holds a special place in reader hearts.'
        }
      ]
    },
    // Support CTA
    supportCTA: {
      quote1: '"Preserve Literature, Preserve Language..."',
      quote2: '"...Preserve Language, Keep Culture Alive!"',
      desc: 'Support our initiative in promoting Marathi literature. Let us unite to nurture our native language and spread the light of literature into every home!',
      ch1Title: 'Bolati Pustake',
      ch1Desc: 'Subscribe to listen to iconic Marathi novels and impactful autobiographies.',
      ch2Title: 'Sahityaratna',
      ch2Desc: 'Subscribe to experience Marathi short stories, essays, and poetry narrations.',
      subBtn: 'Subscribe Now',
      freeNote: '* This movement is completely free. Your single subscription helps preserve our linguistic heritage.'
    },
    // Contact Section
    contact: {
      tag: 'Contact',
      title: 'Get in Touch with Us',
      subtitle: 'Feel free to reach out for inquiries, feedback, or collaborations anytime.',
      infoTitle: 'Contact Information',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      clickToChat: 'Click to Chat on WhatsApp',
      founderRole: 'Narrator & Founder | Bolati Pustake',
      formTitle: 'Send a Message',
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Rahul Chavan',
      phoneInputLabel: 'Your Phone Number',
      phonePlaceholder: 'e.g. 9960120521',
      emailInputLabel: 'Your Email Address',
      emailPlaceholder: 'e.g. rahul@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. Collaboration / Feedback',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Type your message here...',
      sending: 'Sending...',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! Your message has been sent successfully.',
      errorMsg: 'Sorry! An error occurred while sending your message. Please try again or contact via Email/WhatsApp.'
    },
    // Sitemap Section
    sitemap: {
      tag: 'Structure & Guide',
      title: 'Website Sitemap & Structure',
      subtitle: 'Explore our digital platform structure and technical specifications in one place.',
      tabVisual: 'Visual Sitemap',
      tabTech: 'Technical Details',
      visitLink: 'Visit Section',
      policyTitle: 'Policies & Useful Links',
      techSpecsTitle: 'System Specifications',
      sections: {
        home: { name: 'Home Page', desc: 'Introduction & Channel Links', details: 'Introduction to Bolati Pustake movement, primary channel links, and landing hero.' },
        about: { name: 'About Us', desc: 'Story & Founder Profile', details: 'Lockdown inception, Dasharath Patil (Narrator & Founder) bio, and listener testimonials.' },
        stats: { name: 'Stats & Impact', desc: 'Reach & Growth Metrics', details: '300+ novels, 5000+ stories, 15,000+ subscribers, and free literary outreach.' },
        journey: { name: 'Our Journey', desc: 'Timeline Milestones', details: 'Key growth phases from 2020 lockdown to present and future mobile app vision.' },
        mission: { name: 'Mission & Vision', desc: 'Goals & Culture', details: 'Our commitment to preserving Marathi language & literature across digital media.' },
        whyUs: { name: 'Why Us', desc: 'Narration Highlights', details: 'Authentic regional accents, high audio fidelity, rare archives, and accessibility for visually impaired.' },
        literature: { name: 'Literature', desc: 'Authors & Books Catalog', details: 'Audiobooks of iconic works by Laxman Gaikwad, Sharankumar Limbale, Urmila Pawar, etc.' },
        support: { name: 'Get Involved', desc: 'Support Movement', details: 'Join as a listener, advocate, and subscriber to nurture Marathi culture.' },
        contact: { name: 'Contact', desc: 'Form & Social Connect', details: 'Direct contact form, email, WhatsApp, and YouTube channel links.' }
      },
      policies: [
        { name: 'Privacy Policy', desc: 'User data protection policies and guidelines.' },
        { name: 'Terms & Conditions', desc: 'Terms of service for website and media usage.' }
      ],
      techFeatures: [
        { title: 'Single-Page Architecture (SPA)', desc: 'Smooth, fast navigation powered by React & lightweight routing.' },
        { title: 'Fully Responsive Design', desc: 'Optimized layout for mobile, tablet, and desktop viewports.' },
        { title: 'Accessibility & Ease of Use', desc: 'Legible typography and accessible navigation for visually impaired and senior listeners.' },
        { title: 'Blazing Fast Performance (Vite)', desc: 'Optimized code bundling and rapid page loading speed.' }
      ]
    },
    // FAQ Section
    faq: {
      tag: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Learn more about the Bolati Pustake movement',
      q1: 'What is Bolati Pustake?',
      a1: 'Bolati Pustake is a cultural and literary initiative dedicated to making high-quality Marathi audiobooks, classic novels, and short story narrations freely accessible to literature enthusiasts and visually impaired listeners worldwide.',
      q2: 'What books are available on Bolati Pustake?',
      a2: 'Over 300+ renowned Marathi novels and 5,000+ short story narrations are available across our platform and YouTube channels.',
      q3: 'Who is the founder of Bolati Pustake?',
      a3: 'Bolati Pustake was founded during the COVID-19 lockdown by veteran narrator Mr. Dasharath Patil to bring literary warmth into homes.',
      q4: 'How can I listen to Bolati Pustake?',
      a4: 'You can listen to all narrated audiobooks for free on our official website (bolatipustake.in) and YouTube channels (@bolati_pustake).'
    },
    // Footer Section
    footer: {
      desc: "'Bolati Pustake' is not just an audiobook channel; it is an emotional and cultural bridge connecting millions of Marathi literature lovers worldwide.",
      navTitle: 'Navigation',
      policyTitle: 'Policies & Terms',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      rights: 'All Rights Reserved.',
      founderFooter: 'Narrator: Dasharath Patil | Bolati Pustake YouTube Movement'
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('bolati_pustake_lang');
      return saved === 'en' ? 'en' : 'mr';
    } catch (e) {
      return 'mr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('bolati_pustake_lang', lang);
      document.documentElement.lang = lang === 'en' ? 'en' : 'mr';
    } catch (e) {}
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'mr' ? 'en' : 'mr'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to Marathi if key missing
        let fallback = translations.mr;
        for (const k of keys) {
          fallback = fallback ? fallback[k] : null;
        }
        return fallback || path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
