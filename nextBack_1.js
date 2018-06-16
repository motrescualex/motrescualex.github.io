var allQuestions = [
    {question: '1. Elementele de mai jos nu sunt caracteristice hemoragiei arteriale:',
        choices: [
            'a. culoarea sangelui este inchisa',
            'b. sangele tasneste sincron cu sistola cardiaca',
            'c. forta cu care se pierde sangele este concordanta cu tensiunea accidentatului.'],
        correctAnswer:[0,9]},
    {question: '2. Elementele de mai jos sunt caracteristice hemoragiei arteriale:',
        choices: [
            'a. exista sansa chiar la arterele mari ca sangerarea sa se opreasca spontan',
            'b. culoarea sangelui este inchisa',
            'c. sangele tasneste sincron cu sistola cardiaca.'],
        correctAnswer:[2,9]},
    {question: '3. In care dintre hemoragiile de mai jos se pierde mai repede sange:',
        choices: [
            'a. hemoragie venoasa',
            'b. hemoragie venoasa si capilara',
            'c. hemoragie arteriala.'],
        correctAnswer:[2,9]},
    {question: '4. In functie de felul vasului care sangereaza hemoragiile pot fi:',
        choices: [
            'a. exteriorizate',
            'b. arteriale, venoase, capilare, mixte ;',
            'c. interne, externe, interstitiale.'],
        correctAnswer:[1,9]},
    {question: '5. Hemoragia este:',
        choices: [
            'a. eliminarea pe gura a unei cantitati de sange provenind din caile aeriene inferioare',
            'b. sangele este incoagulabil ca zatul de cafea',
            'c. eliminarea pe gura a unei cantitati de sange aerat, spumos dupa un acces de tuse.'],
        correctAnswer:[2,9]},
    {question: '6. In hemoragiile venoase:',
        choices: [
            'a. sangerarea este difuza',
            'b. sangele tasneste sincron cu bataile cardiace',
            'c. sangele este de culoare inchisa.'],
        correctAnswer:[2,9]},
    {question: '7. Hemoragia exteriorizata este hemoragia care se produce atunci cand:',
        choices: [
            'a. sangerarea se face in afara organismului',
            'b. hemoragia se produce intr-o cavitate iar eliminarea are loc dupa catva timp',
            'c. sangele se varsa intr-o cavitate seroasa.'],
        correctAnswer:[1,9]},
    {question: '8. Hemoragia externa este hemoragia care se produce atunci cand:',
        choices: [
            'a. sangele se varsa intr-o cavitate seroasa',
            'b. sangerarea se face in afara organismului',
            'c. hemoragia se produce intr-o cavitatea iar eliminarea are loc dupa catva timp.'],
        correctAnswer:[1,9]},
    {question: '9. Hemoragia interna este hemoragia care se produce atunci cand:',
        choices: [
            'a. sangele se varsa intr-o cavitate seroasa',
            'b. sangerarea se face in afara organismului',
            'c. sangele se face intr-o cavitate iar eliminarea are loc dupa catva timp.'],
        correctAnswer:[0,9]},
    {question: '10. In hemoragiile capilare:',
        choices: [
            'a. sangele iese in jet continuu',
            'b. sangerarea este difuza',
            'c. sangele tasneste sincron cu diastola cardiaca.'],
        correctAnswer:[1,9]},
    {question: '11. Ce cantitate de sange are un adult de 80 kg. :',
        choices: [
            'a. 7 litri',
            'b. 4-5 litri',
            'c. 6 litri'],
        correctAnswer:[2,9]},
    {question: '12. Care din hemoragiile de mai jos se incadreaza in hemoragia interna:',
        choices: [
            'a. hematom la nivelul mezenterului',
            'b. revarsarea sangelui in cavitatea pleurala',
            'c. revarsarea sangelui in vezica urinara.'],
        correctAnswer:[1,9]},
    {question: '13. Care din cauzele de mai jos contribuie in ruptura splinei in doi timpi:',
        choices: [
            'a. cedarea rezistentei si ruperea capsulei cu revarsarea sangelui in peritoneu',
            'b. fragilitate vasculara',
            'c. traumatismul splinei cu hemoragie intrasplenica mentinuta de rezistenta capsulei.'],
        correctAnswer:[0,9]},
    {question: '14. Ce fel de hemoragie are un accidentat care are in mod normal 5 litri de sange si a pierdut 1.5 litri:',
        choices: [
            'a. hemoragie mica',
            'b. hemoragie mare',
            'c. hemoragie mijlocie.'],
        correctAnswer:[2,9]},
    {question: '15. Care din hemoragiile de mai jos sunt considerate "hemoragii medicale":',
        choices: [
            'a. hemoragia prin ruptura de anevrism',
            'b. hemoragii datorate unor deficiente ale factorilor de coagulare',
            'c. hemoragii in cazul ulcerului gastro-duodenal.'],
        correctAnswer:[1,9]},
    {question: '16. Cauza agitatiei in faza de inceput a socului hemoragic este data de:',
        choices: [
            'a. vasoconstrictie',
            'b. anxietate',
            'c. lipsa de oxigenare a creierului.'],
        correctAnswer:[0,9]},
    {question: '17. Care din semnele de mai jos sunt relevante intr-o hemoptizie:',
        choices: [
            'a. sangele din hemoptizie este incoagulabil',
            'b. bolnavul de hemoptizie are o senzatie de caldura retrosternala',
            'c. sangele se evacueaza prin varsatura.'],
        correctAnswer:[1,9]},
    {question: '18. Care este cauza tahipneii in cazul unei hemoragii:',
        choices: [
            'a. scaderea CO2 din sange si tesuturi',
            'b. cresterea cantitatii de CO2 in sange si excitarea centrului respirator din bulb',
            'c. cresterea tensiunii arteriale in faza de inceput a hemoragiei.'],
        correctAnswer:[1,9]},
    {question: '19. In cazul unei hemoragii mari, cand tensiunea arteriala scade sub 60-80 mm Hg, cum reactioneaza rinichiul:',
        choices: [
            'a. functioneaza normal, urina este hiperconcentrata',
            'b. acumularea de metaboliti creste volumul sangerarii',
            'c. apare insuficienta renala acuta'],
        correctAnswer:[2,9]},
    {question: '20. Cum este pulsul in cursul unei hemoragii mari:',
        choices: [
            'a. pulsul este slab batut, filiform',
            'b. pulsul este aritmic',
            'c. pulsul este bradicardic, bine batut'],
        correctAnswer:[0,9]},
    {question: '21. Care din procedeele de mai jos pot duce la hemostaza definitiva:',
        choices: [
            'a. administrarea de hemostatice, vitamina K, venostat',
            'b. legatura si sutura vaselor',
            'c. asezarea bolnavului in pozitie de Trendelemburg'],
        correctAnswer:[1,9]},
    {question: '22. Care este cauza scaderii hematocritului dupa oprirea hemoragiei:',
        choices: [
            'a. cresterea diurezei',
            'b. vasodilatatie, dupa oprirea hemoragiei',
            'c. invazia apei din tesuturi in circulatie'],
        correctAnswer:[2,9]},
    {question: '23. Care din factorii de mai jos contribuie la hemostaza spontana:',
        choices: [
            'a. transformarea protrombinei sub actiunea tromboplastinei in trombina',
            'b. pansamentul compresiv',
            'c. aplicare atenta a unui garou'],
        correctAnswer:[0,9]},
    {question: '24. Cum se face hemostaza provizorie cand avem o sangerare la nivelul gatului:',
        choices: [
            'a. fixarea gatului intr-o anumita pozitie',
            'b. aplicarea unui garou',
            'c. compresiune digitala pe plan osos'],
        correctAnswer:[2,9]},
    {question: '25. Hemostaza provizorie cu ajutorul garoului se face prin aplicare acestuia:',
        choices: [
            'a. desupra plagii cand hemoragia provine dintr-o vena',
            'b. peste pansamentul de la nivelul plagii',
            'c. desupra ranii cand hemoragia provine dintr-o artera.'],
        correctAnswer:[2,9]},
    {question: '26. Melena este un scaun:',
        choices: [
            'a. rosu-aprins',
            'b. negru ca pacura',
            'c. aspect de zat de cafea'],
        correctAnswer:[1,9]},
    {question: '27. Tulburarile care survin in cazul hemoragiilor mijlocii si mari sunt:',
        choices: [
            'a. ischemia miocardica',
            'b. mentinerea masei circulante in limite normale',
            'c. rinichiul functioneaza normal, urina este hiperconcentrata.'],
        correctAnswer:[0,9]},
    {question: '28. Durerea in colica biliara are urmatoarele caracteristici:',
        choices: [
            'a. este localizata in hipocondrul drept si iradiaza in regiunea dorso-lombara',
            'b. este localizata in hipocondrul drept, iradiaza in membrul inferior si cedeaza la administrare de antispastice',
            'c. localizare tipica in epigastru si cedeaza la administrare de morfina'],
        correctAnswer:[0,9]},
    {question: '29. Tabloul clinic in colica biliara se caracterizeaza prin:',
        choices: [
            'a. anxietate, bradicardie, dispnee',
            'b. febra, varsaturi, frison',
            'c. transpiratii reci, hipertensiune arteriala'],
        correctAnswer:[1,9]},
    {question: '30. Durerea in colica biliara nu se poate combate cu:',
        choices: [
            'a. antispastice',
            'b. nitroglicerina',
            'c. morfina'],
        correctAnswer:[2,9]},
    {question: '31. Nu sunt contraindicate in colica biliara:',
        choices: [
            'a. tubajul duodenal',
            'b. administrarea de antibiotice',
            'c. administrarea de opiacee.'],
        correctAnswer:[1,9]},
    {question: '32. In colica biliara sunt prezente urmatoarele semne:',
        choices: [
            'a. tulburari de tranzit',
            'b. semnul Murphy prezent',
            'c. pozitie antialgica in decubit ven 828d319i tral'],
        correctAnswer:[1,9]},
    {question: '33. Hemostaza provizorie este:',
        choices: [
            'a. oprirea fara interventie a unei hemoragii',
            'b. hemostaza activa prin care se poate opri un timp limitat o hemoragie',
            'c. oprirea definitiva a hemoragiei.'],
        correctAnswer:[1,9]},
    {question: '34. Hemostaza spontana este:',
        choices: [
            'a. oprirea fara interventie a unei hemoragii',
            'b. hemostaza activa prin care se poate opri un timp limitat hemoragia',
            'c. oprirea definitiva a hemoragiei.'],
        correctAnswer:[0,9]},
    {question: '35. In primele 3-4 luni de la hemoragie refacerea organismului are loc prin:',
        choices: [
            'a. etapa de refacere a fierului',
            'b. etapa hematologica',
            'c. etapa volemica.'],
        correctAnswer:[1,9]},
    {question: '36. In primele 5-6 zile de la hemoragie refacerea organismului are loc prin:',
        choices: [
            'a. etapa volemica',
            'b. etapa de refacere a fierului',
            'c. etapa hematologica'],
        correctAnswer:[0,9]},
    {question: '37. La un pacient cu hemoragie, insuficienta renala acuta se poate instala atunci cand tensiunea arteriala scade sub:',
        choices: [
            'a. 100 mm Hg',
            'b. 140 mm Hg',
            'c. 60 mm Hg'],
        correctAnswer:[2,9]},
    {question: '38. Hemoragia la nivelul aparatului digestiv exteriorizata prin varsaturi se numeste:',
        choices: [
            'a. hematemeza',
            'b. hematurie',
            'c. hemoptizie.'],
        correctAnswer:[0,9]},
    {question: '39. Este contraindicata administrarea in colica biliara:',
        choices: [
            'a. papaverina',
            'b. nitroglicerina',
            'c. morfina'],
        correctAnswer:[2,9]},
    {question: '40. Este contraindicata administrarea in colica biliara:',
        choices: [
            'a. fortral',
            'b. colebil',
            'c. mialgin'],
        correctAnswer:[1,9]},
    {question: '41. Hemoptizia poate fi diferentiata de hematemeza prin faptul ca hemoptizia:',
        choices: [
            'a. contine resturi alimentare',
            'b. sangele este aerat',
            'c. apare in timpul unui efort de varsatura.'],
        correctAnswer:[1,9]},
    {question: '42. Urmatoarele explorari paraclinice confirma prezenta ulcerului gastric:',
        choices: [
            'a. VSH crescut',
            'b. endoscopia gastrica',
            'c. hemoragii oculte.'],
        correctAnswer:[1,9]},
    {question: '43. Examenul radiologic cu sulfat de bariu este indicat in:',
        choices: [
            'a. ulcerul stenozant',
            'b. colica biliara',
            'c. ulcerul perforat.'],
        correctAnswer:[0,9]},
    {question: '44. Hemoragia:',
        choices: [
            'a. exteriorizata din caile nazale se numeste hematemeza',
            'b. exteriorizata prin materii fecale se numeste melena',
            'c. datorata ruperii varicelor esofagiene se numeste hemoptizie.'],
        correctAnswer:[1,9]},
    {question: '45. Durerea cu sediul in hipocondrul drept insotita de greturi si varsaturi:',
        choices: [
            'a. colicii renale',
            'b. colicii biliare',
            'c. infarct de miocard.'],
        correctAnswer:[1,9]},
    {question: '46. Caracteristicile durerii in ulcerul gastro-duodenal sunt:',
        choices: [
            'a. durere in hipocondrul drept insotita de greturi si varsaturi',
            'b. durere in epigastru, violenta, "ca o lovitura de pumnal", cu iradiere in umeri',
            'c. durere in etajul abdominal superior intensa, continua, cu iradiere in spate.'],
        correctAnswer:[1,9]},
    {question: '47. Manifestarea clinica caracteristica litiazei biliare este:',
        choices: [
            'a. hipertensiunea arteriala polipnee',
            'b. colica biliara',
            'c. tensiune arteriala normala, bradicardie.'],
        correctAnswer:[1,9]},
    {question: '48. Simptomele litiazei biliare sunt:',
        choices: [
            'a. durere violenta in epigastru',
            'b. durere in etajul abdominal superior',
            'c. durere "lovitura de pumnal".'],
        correctAnswer:[0,9]},
    {question: '49. Pentru ca sangele sa fie apt pentru transfuzie continutul flaconului trebuie sa fie in partea superioara:',
        choices: [
            'a. rosu inchis reprezentat de hematii sedimentate',
            'b. galben citron reprezentat de plasma',
            'c. albicios format din leucocite.'],
        correctAnswer:[1,9]},
    {question: '50. Sunt cauze de hemoragie digestiva superioara:',
        choices: [
            'a. ulcerul aton',
            'b. cancerul gastric',
            'c. traumatismul cailor biliara.'],
        correctAnswer:[1,9]},
    {question: '51. Sunt cauze de hemoragie digestiva superioara:',
        choices: [
            'a. rectocolitele ulcerohemoragice',
            'b. varice esofagiene',
            'c. hemoroizii.'],
        correctAnswer:[1,9]},
    {question: '52. Tabloul clinic in hemoragia digestiva superioara se caracterizeaza prin:',
        choices: [
            'a. hipertensiune arteriala',
            'b. bradicardie',
            'c. tendinta la lipotemie in ortostatism.'],
        correctAnswer:[2,9]},
    {question: '53. Hemostaza provizorie cu ajutorul unui garou se face prin aplicarea acestuia:',
        choices: [
            'a. deasupra ranii cand hemoragia provine dintr-o artera',
            'b. deasupra ranii cand hemoragia provine dintr-o vena',
            'c. in plaga cand hemoragia provine dintr-o vena'],
        correctAnswer:[0,9]},
    {question: '54. Hematemeza este:',
        choices: [
            'a. varsatura sanghinolenta',
            'b. explectoratie sanghinolenta',
            'c. scaun sanghinolent'],
        correctAnswer:[0,9]},
    {question: '55. Durerea in ulcerul gastric apare:',
        choices: [
            'a. la 3-4 ore dupa masa',
            'b. la 30 de minute dupa masa',
            'c. nu are legatura cu alimentatia.'],
        correctAnswer:[1,9]},
    {question: '56. In ulcerul gastro duodenal se pot administra:',
        choices: [
            'a. almagel',
            'b. chinidina',
            'c. midocalm.'],
        correctAnswer:[0,9]},
    {question: '57. Semnul caracteristic in ulcerul gastric perforat este:',
        choices: [
            'a. meteorismul',
            'b. agitatia extrema',
            'c. "abdomen de lemn".'],
        correctAnswer:[2,9]},
    {question: '58. Varsaturile ce contin alimente ingerate cu una-doua zile inainte sunt caracteristice pentru:',
        choices: [
            'a. ulcerul gastro-duodenal necomplicat',
            'b. varice esofagiene',
            'c. stenoza pilorica.'],
        correctAnswer:[2,9]},
    {question: '59. O hemoragie digestiva in care pacientul a pierdut 1000-1500 ml sange este:',
        choices: [
            'a. asimptomatica numai in clinostatism de gravitate medie',
            'b. are semne clinice caracterizate prin tahicardie, ameteli, vedere ca prin ceata,lipotemie',
            'c. are semnele caracteristice socului hemoragic.'],
        correctAnswer:[2,9]},
    {question: '60. O hemoragie digestiva este medie cand pierderea de sange este intre:',
        choices: [
            'a. 250-1000 ml iar hemoglobina este mai mare de 10 gr %',
            'b. 250-500 ml iar hemoglobina este mai mica de 10 gr %',
            'c. 1000-1500 ml iar hemoglobina este de 10 gr %'],
        correctAnswer:[0,9]},
    {question: '61. Semnul lui Murphy prezent in colica biliara inseamna ca pacientul prezinta:',
        choices: [
            'a. durere la decompresiune brusca a peretelui abdominal',
            'b. durere la palparea hipocondrului drept',
            'c. durere la palparea hipocondrului stang la inspir profund.'],
        correctAnswer:[1,9]},
    {question: '62. Unde aplicam garoul in cazul unui plagi in treimea medie a coapsei drepte din care tasneste sangele rosu aprins in jet continuu:',
        choices: [
            'a. deasupra plagii',
            'b. dedesubtul plagii',
            'c. peste pansamentul aplicat la nivelul plagii.'],
        correctAnswer:[0,9]},
    {question: '63. Care sunt precautiunile pentru prevenirea socului de garou:',
        choices: [
            'a. mentinerea garoului pe o durata cat mai mica',
            'b. ridicarea rapida a garoului cand accidentatul a ajuns in serviciul de chirurgie',
            'c. ridicarea garoului cat mai incet.'],
        correctAnswer:[2,9]},
    {question: '64. Complicatia cea mai frecventa a ulcerului gastro-duodenal este:',
        choices: [
            'a. cancerul gastric',
            'b. hemoragia digestiva',
            'c. gastrita cronica.'],
        correctAnswer:[1,9]},
    {question: '65. Simptomatologia in hemoragia digestiva este:',
        choices: [
            'a. senzatia de greata, varsaturi, caldura retrosternala',
            'b. paloare, transpiratii reci abundente, hipotensiune arteriala',
            'c. senzatia de gadilire a laringelui, greturi, varsaturi, hipertensiune arteriala.'],
        correctAnswer:[1,9]},
    {question: '66. Sangele din hemoptizie este:',
        choices: [
            'a. de culoare rosu inchis si cu resturi alimentare',
            'b. de culoarea zatului de cafea digerat',
            'c. de culoare rosu aprins, aerat.'],
        correctAnswer:[2,9]},
    {question: '67. Examenul radiologic in cazul ulcerului gastro-duodenal poate oferi:',
        choices: [
            'a. semne directe si indirecte',
            'b. hiperaciditate a sucului gastric',
            'c. hipoaciditate a sucului gastric.'],
        correctAnswer:[0,9]},
    {question: '68. Diagnosticul de certitudine pentru ulcerul gastric se pune pe baza:',
        choices: [
            'a. datelor clinice',
            'b. examenului radiologic',
            'c. examenul sucului gastric.'],
        correctAnswer:[1,9]},
    {question: '69. Examenul util pentru precizarea unor diagnostice nesigure cand este vorba de malignitatea sau benignitatea unui ulcer este:',
        choices: [
            'a. examenul radiografic',
            'b. gastroscopia',
            'c. cercetarea hemoragiilor oculte.'],
        correctAnswer:[1,9]},
    {question: '70. Caracteristicile durerii in ulcerul gastric sunt:',
        choices: [
            'a. durere in epigastru, violenta, "ca o lovitura de pumnal" cu iradiere dorsala',
            'b. durere in hipocondrul drept insotita de greturi si varsaturi',
            'c. durere localizata in epigastru insotita de senzatia de arsura ...'],
        correctAnswer:[2,9]},
    {question: '71. Hemoptizia consta in eliminarea de sange:',
        choices: [
            'a. din cavitatea nazala',
            'b. din stomac',
            'c. din caile respiratorii inferioare.'],
        correctAnswer:[2,9]},
    {question: '72. In cazul ulcerului sunt prezente urmatoarele simptome:',
        choices: [
            'a. durere in epigastru insotita de greturi si varsaturi',
            'b. senzatia de arsura retrosternala care cedeaza la repaus, transpiratii profunde',
            'c. greturi, varsaturi, caldura retrosternala.'],
        correctAnswer:[0,9]},
    {question: '73. In hemoragia digestiva tratamentul de urgenta este:',
        choices: [
            'a. repaus la pat, punga de gheata pe regiunea epigastrica, hemostatice, sedative',
            'b. repaus la pat, punga cu gheta pe regiunea epigastrica, provocarea vomei pentru eliminarea sangelui',
            'c. repaus la pat, alimentatie lichida, hemostatice, opiacee, sedative.'],
        correctAnswer:[0,9]},
    {question: '74. Culoarea sangelui in hemoragiile esofagiene este:',
        choices: [
            'a. rosu aerat, spumos',
            'b. rosu neaerat',
            'c. rosu inchis, brun.'],
        correctAnswer:[1,9]},
    {question: '75. Colicistita acuta este:',
        choices: [
            'a. o infectie a colicistului cu E. Coli',
            'b. o inflamatie acuta a colecistului',
            'c. o tulburare a motricitatii colecistului.'],
        correctAnswer:[1,9]},
    {question: '76. Hemostaza provizorie este corecta daca:',
        choices: [
            'a. garoul este mentinut o ora',
            'b. garoul este mentinut o ora, pauza 2-3 minute',
            'c. garoul este aplicat la extremitatea membrelor.'],
        correctAnswer:[1,9]},
    {question: '77. Sunt manifestari de incompatibilitate de grup:',
        choices: [
            'a. bradipnee respiratorie',
            'b. durerile lombare',
            'c. inapetenta.'],
        correctAnswer:[1,9]},
    {question: '78. Proba de compatibilitate directa se face intre:',
        choices: [
            'a. sangele primitorului si sangele donatorului',
            'b. plasma primitorului si sangele donatorului',
            'c. plasma primitorului si plasma donatorului.'],
        correctAnswer:[1,9]},
    {question: '79. Semnele unei hemoragii mari sunt:',
        choices: [
            'a. paliditate, tahicardie si hipertensiune',
            'b. paliditate, tahipnee, hipotensiune',
            'c. hipotensiune, tahicardie, cianoza.'],
        correctAnswer:[1,9]},
    {question: '80. In metoda Beth-Vincent:',
        choices: [
            'a. cunoastem aglutinele si vrem sa determinam aglutinogenul',
            'b. cunoastem aglutinogenul si vrem sa determinam aglutina',
            'c. vrem sa determinam aglutina cat si aglutinogenul.'],
        correctAnswer:[0,9]},
    {question: '81. Prin metoda Beth-Vincent avem sangele aglutinat in toate cele trei picaturi. Atunci carei grupe corespunde sangele examinat:',
        choices: [
            'a. grupa 0(I)',
            'b. grupa B(III)',
            'c. grupa AB(IV).'],
        correctAnswer:[2,9]},
    {question: '82. Prin metoda Beth-Vincent avem aglutinare in prima si a treia picatura. Atunci carei grupe corespunde sangele examinat:',
        choices: [
            'a. grupa A(II)',
            'b. grupa B(III)',
            'c. grupa 0(I)'],
        correctAnswer:[0,9]},
    {question: '83. Prin metoda Simonin sangele nu se aglutineaza in nici o picatura. Atunci carei grupe apartine sangele aglutinat:',
        choices: [
            'a. grupa A(II)',
            'b. grupa AB(IV)',
            'c. grupa 0(I)'],
        correctAnswer:[1,9]},
    {question: '84. In metoda Simonin cunoastem:',
        choices: [
            'a. aglutinogenul si trebuie sa determinam aglutinele',
            'b. aglutina cat si aglutinogenul',
            'c. aglutinele si trebuie sa determinam aglutinogenul.'],
        correctAnswer:[0,9]},
    {question: '85. Aglutinele anti-RH:',
        choices: [
            'a. nu exista la cei nu RH negativ',
            'b. nu exista la cei cu RH pozitiv',
            'c. exista in ambele situatii.'],
        correctAnswer:[0,9]},
    {question: '86. Un pacient cu grupa 0(I) RH pozitiv ce fel de sange poate primi:',
        choices: [
            'a. grupa 0(I) RH pozitiv',
            'b. grupa A(II) RH negativ',
            'c. grupa B(III) RH pozitiv.'],
        correctAnswer:[0,9]},
    {question: '87. Ce rol are solutia stabilizatoare care este introdusa in flaconul de sange dupa recoltare:',
        choices: [
            'a. anticoagulant',
            'b. de conservare',
            'c. pentru delimitarea celor 3 zone.'],
        correctAnswer:[0,9]},
    {question: '88. Donatorul universal poate deveni "donator universal periculos":',
        choices: [
            'a. cand transfuzam cantitati mici de sange 0(I) unui primitor cu alta grupa',
            'b. cand transfuzam cantitati mari de sange 0(I) unui primitor cu alta grupa',
            'c. cand transfuzam cantitati de sange sub 600 ml.'],
        correctAnswer:[1,9]},
    {question: '89. Care este temperatura optima pentru determinarea grupelor sanguine:',
        choices: [
            'a. temperaturi sub 16 grade Celsius',
            'b. temperaturi intre 16-18 grade Celsius',
            'c. temperaturi in 20-25 grade Celsius.'],
        correctAnswer:[1,9]},
    {question: '90. Dupa cat timp se face citirea factorului RH:',
        choices: [
            'a. dupa 30 de minute',
            'b. dupa 20 de minute',
            'c. dupa 60 de minute.'],
        correctAnswer:[0,9]},
    {question: '91. La ce temperatura se lucreaza proba de compatibilitate directa Jeanbrau:',
        choices: [
            'a. 20-25 grade Celsius',
            'b. 16-18 grade Celsius',
            'c. 37 grade Celsius.'],
        correctAnswer:[2,9]},
    {question: '92. Poate avea loc un accident posttransfuzional prin aglutinare si hemoliza:',
        choices: [
            'a. cand transfuzam sange de aceeasi grupa cu sangele primitorului',
            'b. cand transfuzam sange de grupa diferita de a primitorului peste 600-1000 ml',
            'c. cand transfuzam sange de grupa diferita de a primitorului sub 600 ml.'],
        correctAnswer:[1,9]},
    {question: '93. Pentru a fi transfuzata plasma uscata trebuie sa aiba urmatorul aspect:',
        choices: [
            'a. culoare galbuie alternand cu zone de culoare inchisa',
            'b. o culoare galbuie alternand cu zone de plasma lichida',
            'c. spongios, asezata pe peretii flaconului, de culoare galbuie.'],
        correctAnswer:[2,9]},
    {question: '94. Transfuzia cu sange integral este recomandata in urmatoarele situatii:',
        choices: [
            'a. socul prin arsuri',
            'b. anemia hemofilicilor in criza hemoragica',
            'c. anemii hipocrome produse prin hemoragii cronice.'],
        correctAnswer:[1,9]},
    {question: '95. Urmatoarele afectiuni sunt complicatii la nivelul ficatului a litiazei biliare:',
        choices: [
            'a. angiocolita acuta',
            'b. fistula biliara',
            'c. ciroza hepatica.'],
        correctAnswer:[2,9]},
    {question: '96. Urmatoarele afectiuni sunt complicatii ale litiazei biliare la nivelul tubului digestiv:',
        choices: [
            'a. ileus biliar',
            'b. dischineziile biliare',
            'c. hemocolecistul.'],
        correctAnswer:[0,9]},
    {question: '97. Diagnosticul diferential in cazul ulcerului gastric se poate face cu:',
        choices: [
            'a. stenoza pilorica',
            'b. cancerul gastric',
            'c. litiaza biliara.'],
        correctAnswer:[1,9]},
    {question: '98. Factorii infectiosi determina formarea calculilor biliari astfel:',
        choices: [
            'a. prin microstaza creata de modificari distrofice',
            'b. modifica compozitia chimica si PH-ul bilei',
            'c. modifica concentratia colesterolului infectat in bila.'],
        correctAnswer:[1,9]},
    {question: '99. Care din urmatorii calculi sunt transparenti la razele X:',
        choices: [
            'a. calcul de carbonat de calciu',
            'b. calculi micsti',
            'c. calcul de colesterol.'],
        correctAnswer:[2,9]},
    {question: '100. Accidentele posttransfuzionale prin supraincarcare pot sa apara la urmatorii bolnavi:',
        choices: [
            'a. bolnavi astenici',
            'b. bolnavi anemici',
            'c. bolnavi hipertensivi.'],
        correctAnswer:[2,9]},
    {question: '101. Cantitatea maxima de sange ce se poate administra in 24 h la bolnavii hipertensivi, renali cronici este:',
        choices: [
            'a. 600 - 1000 ml',
            'b. 300 - 600 ml',
            'c. 200 - 400 ml.'],
        correctAnswer:[0,9]},
    {question: '102. Cantitatea de sange care se poate administra in 24 h la bolnavii cu o inima sanatoasa este:',
        choices: [
            'a. 1000 - 1500 ml',
            'b. 2000 - 3000 ml',
            'c. 750 - 1000 ml.'],
        correctAnswer:[1,9]},
    {question: '103. Hematuria:',
        choices: [
            'a. apare in cazul incompatibilitatii de grup',
            'b. apare in socul hemolitic',
            'c. apare la administrarea de sange ce contine alergeni.'],
        correctAnswer:[0,9]},
    {question: '104. Prezenta corpilor straini la nivelul nasului in cazuri recente determina urmatoarele simptome:',
        choices: [
            'a. senzatia de infundare a nasului, hidroree, stranut;',
            'b. rinoree mucopurulenta, eczema;',
            'c. mucoasa congestionata acoperita cu secretii purulente;'],
        correctAnswer:[0,9]},
    {question: '105. Cand corpul strain se afla sub pleoapa apar urmatoarele simptome :',
        choices: [
            'a. lacrimare, fotofobie, durere;',
            'b. scaderea acuitatii vizuale;',
            'c. edem corneean.'],
        correctAnswer:[0,9]},
    {question: '106. Corpii straini conjunctivali care nu sunt inclavati pot fi extrasi:',
        choices: [
            'a. cu un tampon de vata curata plasat pe o bagheta de sticla;',
            'b. prin spalare abundenta a sacului conjunctival cu apa sau o solutie dezinfectanta;',
            'c. extragerea cu ajutorul acelor de corpi straini.'],
        correctAnswer:[0,9]},
    {question: '107. Inflamatia din bronsita acuta intereseaza:',
        choices: [
            'a. tot arborele bronsic ;',
            'b. bronhiile mari si mijlocii;',
            'c. nu intereseaza frecvent traheea;'],
        correctAnswer:[1,9]},
    {question: '108. Bronsita acuta , nu se intilneste in urmatoarele afectiuni:',
        choices: [
            'a. pneumonie;',
            'b. gripa;',
            'c. dilatatia bronhiilor;'],
        correctAnswer:[0,9]},
    {question: '109. Bronsita acuta este:',
        choices: [
            'a. o inflamatie acuta a mucoasei bronhiilor mari si mijlocii;',
            'b. o hipersecretie a bronhiilor mari si mijlocii;',
            'c. o inflamatie subacuta a mucoasei bronsice, interesind frecvent traheea;'],
        correctAnswer:[0,9]},
    {question: '110. Fazele de evolutie clinica din bronsita acuta sint:',
        choices: [
            'a. catar rinofaringian, faza productive, convalescenta;',
            'b. faza de coriza, faza de cruditate, faza de coctiune;',
            'c. faza de cruditate, faza de coctiune, faza de vindecare;'],
        correctAnswer:[1,9]},
    {question: '111. Faza de cruditate din bronsita acuta dureaza:',
        choices: [
            'a. 2-3 zile;',
            'b. 1-5 zile;',
            'c. 3-6 zile;'],
        correctAnswer:[0,9]},
    {question: '112. Bronsita acuta:',
        choices: [
            'a. dureaza 1-2 saptamini;',
            'b. este o inflamatie subacuta a mucoasei bronsice;',
            'c. are 2 faze de evolutie;'],
        correctAnswer:[0,9]},
    {question: '113. Simptomatic, in faza de coctiune din bronsita acuta se administreaza:',
        choices: [
            'a. expectorante;',
            'b. calmante ale tusei;',
            'c. codenal;'],
        correctAnswer:[0,9]},
    {question: '114. Bronsita cronica este un sindrom clinic caracterizat prin:',
        choices: [
            'a. tuse, insotita de cresterea secretiilor bronsice, permanenta sau intermitenta;',
            'b. tuse, insotita de cresterea secretiilor bronsice, cauzata de o boala sau leziune bronhopulmonara specifica;',
            'c. tuse insotita de secretii bronsice timp de 2 luni pe an, 3 ani consecutiv;'],
        correctAnswer:[0,9]},
    {question: '115. Bronsita cronica:',
        choices: [
            'a. apare la populatia de peste 40de ani( in special barbati)',
            'b. este o boala usoara si frecventa;',
            'c. nu face parte din tabloul de bronhopneumatie cronica obtructiva nespecifica ;'],
        correctAnswer:[0,9]},
    {question: '116. Bronhopneumopatia cronica obstructiva nepecifica cuprinde, urmatoarele afectiuni:',
        choices: [
            'a. astm bronsic, emfizem pulmonar si bronsita acuta;',
            'b. astm bronsic, emfizem pulmonar si bronsita cronica;',
            'c. bronsita acuta, astm bronsic si fibroza pulmonara;'],
        correctAnswer:[1,9]},
    {question: '117. Dintre factorii cauzali ai bronsitei cronice, un loc primordial il ocupa:',
        choices: [
            'a. infectia;',
            'b. alergia;',
            'c. factorii iritanti;'],
        correctAnswer:[0,9]},
    {question: '118. Alergia din bronsita cronica:',
        choices: [
            'a. actioneaza prin sensibilizare la pneumoalergeni;',
            'b. nu actioneaza prin sensibilizare la alergeni microbieni;',
            'c. nu este un factor cauzal;'],
        correctAnswer:[0,9]},
    {question: '119. In bronsita cronica:',
        choices: [
            'a. bolnavul este de obicei afebril;',
            'b. dispneea nu creste progresiv;',
            'c. cianoza apare precoce;'],
        correctAnswer:[0,9]},
    {question: '120. Explorarea functionala in bronsita cronica evidentiaza:',
        choices: [
            'a. cresterea VEMS;',
            'b. semne de disfunctie ventilatorie obstructive;',
            'c. cresterea debitului ventilator maxim pe minut;'],
        correctAnswer:[1,9]},
    {question: '121. Intr-un stadiu avansat din bronsita cronica, se evidentiaza tabloul clinic de BPOC, care arata ca:',
        choices: [
            'a. procesul este difuz, extins si la bronhiolele distale;',
            'b. procesul este extins si la bronhiile mari si mijlocii;',
            'c. procesul nu este extins si la bronhiolele distale;'],
        correctAnswer:[0,9]},
    {question: '122. In bronsita cronica fiecare puseu infectios accentueaza fenomenele obstructive prin:',
        choices: [
            'a. scaderea secretiei de mucus, relaxare bronsica;',
            'b. hipersecretie de mucus, spasm bronsic si decompensare cardiorespiratorie;',
            'c. spasm bronsic si scaderea secretiei de mucus;'],
        correctAnswer:[1,9]},
    {question: '123. Astmul bronsic este un sindrom clinic caracterizat prin:',
        choices: [
            'a. reducerea generalizata, variabila si reversibila a calibrului bronhiilor, cu crize paroxistice de dispnee expiratorie si raluri sibilante;',
            'b. reducerea generalizata, ireversibila a calibrului bronhiilor, cu crize paroxistice de dispnee inspiratorie si raluri sibilante;',
            'c. reducerea generalizata si ireversibila a calibrului bronhiilor , cu crizeparoxistice de dispnee expiratorie si raluri ronflante;'],
        correctAnswer:[0,9]},
    {question: '124. Dispneea paroxistica din astmul bronsic este consecinta urmatorilor fctori, care induc bronhostenoza:',
        choices: [
            'a. inflamatia mucoasei bronsice, hiposecretia si spasmul;',
            'b. edemul mucoasei bronsice, hipersecretia si spasmul;',
            'c. eritemul mucoasei bronsice, hiposecretia si relaxarea musculaturii bronsice;'],
        correctAnswer:[1,9]},
    {question: '125. Bronsita astmatiforma, complicatie a astmului bronsic are una din , urmatoarele caracteristici:',
        choices: [
            'a. se manifesta prin crize de dispnee paroxistica de tip inspirator;',
            'b. este precedata intotdeauna de crize astmatice;',
            'c. nu este urmarea infectarii astmului bronsic;'],
        correctAnswer:[1,9]},
    {question: '126. Sfirsitul crizei de astm bronsic este anuntat de :',
        choices: [
            'a. aparitia sputei viscoase, albicioase( perlata);',
            'b. polipnee si transpiratii profuse;',
            'c. aparitia cianozei;'],
        correctAnswer:[0,9]},
    {question: '127. Durata crizei de astm bronsic poate fi :',
        choices: [
            'a. de citeva minute sau ore;',
            'b. peste 24 de ore;',
            'c. de citeva secunde , pina la citva minute;'],
        correctAnswer:[0,9]},
    {question: '128. In tratamentul astmului bronsic, corticoterapia:',
        choices: [
            'a. nu se administreaza in formele grave;',
            'b. este tratamentul cel mai eficace;',
            'c. administrata pe cale orala, nu prezinta riscuri;'],
        correctAnswer:[1,9]},
    {question: '129. Scaderea saturatiei in oxigen a hemoglobinei din singele arterial, din cadrul insuficientei respiratorii cornice, are urmatoarele caracteristici :',
        choices: [
            'a. este constanta;',
            'b. este inconstanta;',
            'c. nu este obligatorie in insuficienta respiratorie cronica;'],
        correctAnswer:[0,9]},
    {question: '130. Cresterea presiunii partiale a bioxidului de carbon, in singele arterial din cadrul insuficientei respiratorii cronice, are urmatoarele caracteristici:',
        choices: [
            'a. nu caracterizeaza insuficienta respiratorie cronica;',
            'b. este inconstanta;',
            'c. este constanta;'],
        correctAnswer:[1,9]},
    {question: '131. Modificarile patologice caracteristice, insuficientei respiratorii cronice, pot aparea:',
        choices: [
            'a. treptat;',
            'b. brusc;',
            'c. variabil;'],
        correctAnswer:[1,9]},
    {question: '132. Tratamentul profilactic din insuficienta respiratorie cronica, urmareste:',
        choices: [
            'a. tratamentul bolilor care pot compensa insuficienta respiratorie;',
            'b. tratamentul corect al bolilor care duc la insuficienta respiratorie;',
            'c. restabilirea permeabilitatii bronsice, prin dezobstruare bronsica, cu substante bronho dilatatoare;'],
        correctAnswer:[1,9]},
    {question: '133. Administrarea oxigenului in tratamentul insuficientei respiratorii cronice, este contraindicat, in urmatoarele situatii:',
        choices: [
            'a. cind domina cresterea oxigenului in singe;',
            'b. cind domina scaderea bioxidului de carbon in singe;',
            'c. cind domina cresterea bioxidului de carbon in singe;'],
        correctAnswer:[2,9]},
    {question: '134. Insuficienta respiratorie acuta se deosebeste de insuficienta respiratorie cronica prin:',
        choices: [
            'a. modificarile patologice din insuficienta respiratorie acuta pot aparea treptat;',
            'b. circumstantele in care apare si evolutia rapida catre asfixie;',
            'c. interventia de reanimare, in insuficienta respiratorie acuta, nu este o urgenta medicala majora;'],
        correctAnswer:[1,9]},
    {question: '135. Simptomatologia in insuficienta acuta, nu depinde de :',
        choices: [
            'a. lipsa de oxigen;',
            'b. excesul de oxigen;',
            'c. retentia de oxigen;'],
        correctAnswer:[1,9]},
    {question: '136. Ca fenomen compensator, in insuficienta respiratorie acuta apare:',
        choices: [
            'a. bradicardia;',
            'b. tahicardia;',
            'c. hipertensiunea arteriala;'],
        correctAnswer:[1,9]},
    {question: '137. Encefalopatia respiratorie din cadrul, insuficientei respiratorii acute, apare:',
        choices: [
            'a. cind hipercapnia este pronuntata;',
            'b. cind hipoxemia este redusa;',
            'c. cind apare polipneea;'],
        correctAnswer:[0,9]},
    {question: '138. Tratamentul insuficientei respiratorii acute, nu comporta:',
        choices: [
            'a. masuri terapeutice generale;',
            'b. masuri terapeutice speciale;',
            'c. vaccinare antigripala;'],
        correctAnswer:[2,9]},
    {question: '139. Masurile terapeutice generale, aplicate in insuficienta repiratorie acuta, presupun:',
        choices: [
            'a. masuri terapeutice adresate cauzei;',
            'b. masuri terapeutice adresate oricarei ,insuficiente respiratorii acute;',
            'c. gimnastica respiratorie;'],
        correctAnswer:[1,9]},
    {question: '140. Masurile terapeutice speciale, din cadrul insuficientei respiratorii acute, au urmatoarele caracteristici:',
        choices: [
            'a. se adreseaza cauzei;',
            'b. nu se adreseaza oricarei forme de insuficienta respiratorie acuta;',
            'c. nu sint obligatorii, in tratamentul insuficientei respiratorii acute;'],
        correctAnswer:[0,9]},
    {question: '141. Cauza cea mai frecventa de asfixie, in insuficienta respiratorie acuta, o reprezinta:',
        choices: [
            'a. obstruarea cailor aeriene;',
            'b. infectiile respiratorii;',
            'c. pneumotoraxul;'],
        correctAnswer:[0,9]},
    {question: '142. Cea mai eficace masura in dezobstruarea cavitatii bucofaringiene, din  insuficienta respiratorie acuta, consta in:',
        choices: [
            'a. introducerea policelui in gura bolnavului, la mijlocul mandibulei si tragerea in sus;',
            'b. asezarea bolnavului in decubit dorsal;',
            'c. introducerea policelui in gura bolnavului si tragerea in jos;'],
        correctAnswer:[0,9]},
    {question: '143. Respiratia " gura la nas" , din cadrul tratamentului insuficientei respiratorii acute, se practica:',
        choices: [
            'a. cind nu se poate deschide gura victimei;',
            'b. prin intermediul canulei;',
            'c. numai cind victima nu este constienta;'],
        correctAnswer:[0,9]},
    {question: '144. Pneumonia pneumococica este caracterizata prin urmatoarele simptome:',
        choices: [
            'a. debutul nu este brutal si nu poate fi bine precizat de bolnav;',
            'b. frison ,febra( pina la 40 de grade) junghi thoracic;',
            'c. in zilele premergatoare, exista intotdeauna o discreta infectie rinofaringiana;'],
        correctAnswer:[1,9]},
    {question: '145. Perioada de stare din pneumonia pneumococica se instaleaza:',
        choices: [
            'a. la 1-2 zile de la debut;',
            'b. la 3-4 zile de la debut;',
            'c. la citeva ore de la debut:'],
        correctAnswer:[2,9]},
    {question: '146. Examenul fizic in pneumonia pneumococica, pune in evidenta, incepind din ziua a doua:',
        choices: [
            'a. raluri sibilante si ronflante;',
            'b. in sindrom de condensare pulmonara;',
            'c. vibratii vocale diminuate;'],
        correctAnswer:[1,9]},
    {question: '147. In pneumonia pneumococica:',
        choices: [
            'a. temperatura se mentine " in platou";',
            'b. apetitul este crescut;',
            'c. bolnavul prezinta poliurie;'],
        correctAnswer:[1,9]},
    {question: '148. Examenul singelui in pneumonia pneumococica evidentiaza:',
        choices: [
            'a. leucocitoza cu polinucleoza;',
            'b. hipofibrinemie;',
            'c. viteza de sedimentare mult incetinita;'],
        correctAnswer:[0,9]},
    {question: '149. Antibioticul de electie, in tratamentul pneumoniei pneumococice este:',
        choices: [
            'a. tetraciclina;',
            'b. penicilina G;',
            'c. ampicilina;'],
        correctAnswer:[1,9]},
    {question: '150. Tuberculoza pulmonara este o boala infecto- contagioasa cu urmatoarele caracteristici:',
        choices: [
            'a. este provocata de bacilul Koch;',
            'b. are de obicei o evolutie acuta;',
            'c. afecteaza organismul in intregime, interesind cu precadere plaminul;'],
        correctAnswer:[2,9]},
    {question: '151. Tuberculoza pulmonara este o boala infecto- contagioasa cu urmatoarele caracteristici:',
        choices: [
            'a. este provocata de pneumococ;',
            'b. pe parcursul ei se deosebesc doua etape: tuberculoza primara si secundara;',
            'c. are de obicei o evolutie cronica;'],
        correctAnswer:[0,9]},
    {question: '152. Tuberculoza pulmonara are urmatoarele caracteristici:',
        choices: [
            'a. nu afecteaza organismul in intregime;',
            'b. este o boala infecto- contagioasa;',
            'c. are de obicei o evolutie acuta;'],
        correctAnswer:[1,9]},
    {question: '153. In cazul tuberculozei pulmonare, contaminarea se realizeaza:',
        choices: [
            'a. niciodata pe cale cutanata sau transplacentar;',
            'b. frecvent pe cale digestiva;',
            'c. pe cale aeriana, aproape intotdeauna prin bacilul Koch de tip uman;'],
        correctAnswer:[2,9]},
    {question: '154. Patrunderea in organism a bacilului Koch determina:',
        choices: [
            'a. semne clinice constante;',
            'b. reactii la tuberculina negative;',
            'c. leziuni anatomice;'],
        correctAnswer:[2,9]},
    {question: '155. Leziunea initiala( primoinfectia) din tuberculoza pulmonara este situata aproape intotdeauna :',
        choices: [
            'a. la nivelul cordului;',
            'b. la nivelul pleurei;',
            'c. la nivelul plaminului;'],
        correctAnswer:[2,9]},
    {question: '156. In tuberculoza pulmonara, bacilul Koch se se pune in evidenta in:',
        choices: [
            'a. urina;',
            'b. expectoratie si lichid de varsatura gastrica;',
            'c. lichid cefalo-rahidian;'],
        correctAnswer:[1,9]},
    {question: '157. In cazul tuberculozei meningiene, bacilul Koch se pune in evidenta in:',
        choices: [
            'a. lichid cefalorahidian;',
            'b. expectoratie;',
            'c. singe;'],
        correctAnswer:[0,9]},
    {question: '158. Leziunea caracteristica a tuberculozei secundare este:',
        choices: [
            'a. noduli pulmonari;',
            'b. infiltrate pulmonare;',
            'c. caverna;'],
        correctAnswer:[2,9]},
    {question: '159. Diseminarea bacilului Koch in tuberculoza secundara este de obicei:',
        choices: [
            'a. bronhogena;',
            'b. limfatica;',
            'c. hematogena;'],
        correctAnswer:[0,9]},
    {question: '160. Debutul tuberculozei secundare poate fi :',
        choices: [
            'a. asimptomatic, boala fiind descoperita cu ajutorul unui control radiologic;',
            'b. intotdeauna acut, brusc;',
            'c. precizat datorita frisonului unic, intens, generalizat;'],
        correctAnswer:[0,9]},
    {question: '161. Simptomul fuindamental al tuberculozei secundare este:',
        choices: [
            'a. expectoratia;',
            'b. tusea;',
            'c. durerile toracice;'],
        correctAnswer:[1,9]},
    {question: '162. In tuberculoza secundara, un caracter particular al perioadei de stare il prezinta:',
        choices: [
            'a. durerile toracice;',
            'b. dispneea;',
            'c. febra;'],
        correctAnswer:[2,9]},
    {question: '163.Dispneea polipneica din insuficienta respiratorie acuta poate apare in :',
        choices: [
            'a. procese pulmonare si pleurale;',
            'b. procese laringotraheobronsice;',
            'c. accidente obstructive ale cailor respiratorii superioare;'],
        correctAnswer:[0,9]},
    {question: '164. Cauza principala a anginei pectorale este:',
        choices: [
            'a. coronarita;',
            'b. ateroscleroza coronariana;',
            'c. embolii sau anomalii congenitale ale arterelor coronare;'],
        correctAnswer:[1,9]},
    {question: '165. Crizele din angina pectorala nu dispar la :',
        choices: [
            'a. incetarea cauzelor;',
            'b. administrarea de nitroglicerina;',
            'c. administrarea de miofilin;'],
        correctAnswer:[2,9]},
    {question: '166. Durata crizelor din angina pectorala este de :',
        choices: [
            'a. citeva minute;',
            'b. citeva ore;',
            'c. 1-2 zile;'],
        correctAnswer:[0,9]},
    {question: '167. Simptomul principal al anginei pectorale este:',
        choices: [
            'a. tusea seaca;',
            'b. dispneea;',
            'c. durerea;'],
        correctAnswer:[2,9]},
    {question: '168. Caracterul durerii din angina pectorala este:',
        choices: [
            'a. constrictiv, ca o" gheara, arsura sau sufocare";',
            'b. restrictiv;',
            'c. continuu;'],
        correctAnswer:[0,9]},
    {question: '169. Durerea din angina pectorala are urmatoarele caracteristici:',
        choices: [
            'a. nu este insotita de anxietate;',
            'b. iradierile nu sint obligatorii;',
            'c. dureaza peste 15 minute;'],
        correctAnswer:[1,9]},
    {question: '170. Administrarea nitroglicerinei in criza anginoasa se realizeaza:',
        choices: [
            'a. intravenos;',
            'b. sublingual;',
            'c. peros;'],
        correctAnswer:[1,9]},
    {question: '171. Singura medicatie cu actiune prompta in criza din angina pectorala este:',
        choices: [
            'a. nitroglicerina;',
            'b. propanolol;',
            'c. nitropector;'],
        correctAnswer:[0,9]},
    {question: '172. Infarctul miocardic este un sindrom clinic provocat de:',
        choices: [
            'a. necroza ischemica a unei portiuni din miocard;',
            'b. inflamatia miocardului;',
            'c. scaderea oxigenarii unei portiuni din miocard;'],
        correctAnswer:[0,9]},
    {question: '173. Necroza ischemica din infarctul miocardic este determinat de :',
        choices: [
            'a. inflamarea in grade variate a unei artere coronare;',
            'b. obstruarea brusca a unei artere coronare;',
            'c.obstruarea brusca aunei artere carotide;'],
        correctAnswer:[1,9]},
    {question: '174. Ce este dezinfectia?',
        choices: [
            'a. metoda de prevenire a infectiilor plagilor operatorii;',
            'b. metoda curativa de distrugere a microbilor dintr-o plaga;',
            'c. metoda de indepartare si distrugere a microbilor de pe piele , plagi , obiecte , plosti urinare;'],
        correctAnswer:[2,9]},
    {question: '175. Infarctul miocardic este:',
        choices: [
            'a. o forma clinica a cardiopatiei ischemice, caracterizata prin crize dureroase paroxistice;',
            'b. un sindrom clinic provocat de necroza ischemica a unei portiuni din miocard;',
            'c. o tulburare produsa de modificarile organice ale arterelor coronare'],
        correctAnswer:[1,9]},
    {question: '176. Cauza principala a infarctului miocardic este:',
        choices: [
            'a. aortita luetica ;',
            'b. coronarita reumatica ;',
            'c. ateroscleroza 90 - 95 % .'],
        correctAnswer:[2,9]},
    {question: '177. In evolutia infarctului miocardic se deosebesc :',
        choices: [
            'a. o perioada prodromala, una de debut, de stare si de convalescenta ;',
            'b. o perioada de debut, de stare si de convalescenta',
            'c. o perioada prodromala, de debut si de convalescenta'],
        correctAnswer:[0,9]},
    {question: '178. Febra in infarctul miocardic',
        choices: [
            'a. dureaza 8-10 zile ;',
            'b. apare la 6 - 12 h dupa debut ;',
            'c. este de obicei moderata.'],
        correctAnswer:[2,9]},
    {question: '179. Leucocitoza in infarctul miocardic:',
        choices: [
            'a. scade dupa o luna;',
            'b. apare din primele ore;',
            'c. ramane constanta timp de 1 saptamana.'],
        correctAnswer:[1,9]},
    {question: '180. Cel mai important semn de laborator in infarctul miocardic este :',
        choices: [
            'a. leucocitoza ;',
            'b. cresterea fibrinogenului ;',
            'c. cresterea enzimelor (transaminazelor) din primele are de la debut.'],
        correctAnswer:[2,9]},
    {question: '181. LHD - ul in infarctul miocardic',
        choices: [
            'a. incepe sa creasca dupa 4-6 ore de la perioada prodramala ;',
            'b. se normalizeaza in 4-7 zile (normal 20u.i);',
            'c. se normalizeaza in 3-5 zile.'],
        correctAnswer:[1,9]},
    {question: '182. Angorul pectoral este un sindrom clinic care tradeaza o suferinta miocardica determinata de :',
        choices: [
            'a. tulburarile de ritm ale inimii ;',
            'b. un dezechilibru intre necesitatea de oxigen a muschiului inimii si aportul caronarian ;',
            'c. un dezechilibru intre aportul de oxigen al muschiului inimi si aportul coronarian.'],
        correctAnswer:[1,9]},
    {question: '183. Criza dureroasa din angorul pectoral :',
        choices: [
            'a. nu dispare la administrare de nitroglicerina ;',
            'b. apare dupa efort, emotii, mese copiaose ;',
            'c. dureaza 2-3 minute, pana la maxim 20 minute.'],
        correctAnswer:[1,9]},
    {question: '184. Cauzele favorizante ale angorului pectoral sunt:',
        choices: [
            'a. diabetul zaharat, tabagismul, tulburarile de ritm;',
            'b. cardiopatiile valvulare;',
            'c. hipertensiunea arteriala .'],
        correctAnswer:[0,9]},
    {question: '185. Localizarea durerii in angorul pectoral:',
        choices: [
            'a. in umarul stang;',
            'b. in regiunea toracica anterioara;',
            'c. 80-90 % retrosternal de unde se raspandeste catre regiunea precordiala'],
        correctAnswer:[2,9]},
    {question: '186. Manifestarile clinice ale EPA sunt :',
        choices: [
            'a. tuse uscata in prima faza, apoi cu sputa spumoasa rozata, aerata ;',
            'b. turgescenta jugularelor, tegumente uscate, palide;',
            'c. bradipnee.'],
        correctAnswer:[0,9]},
    {question: '187. In cazul EPA cu TA scazute sunt contraindicate :',
        choices: [
            'a. emisiunea de sange, morfina ;',
            'b. pozitia trendelenburg ;',
            'c. ventilatia mecanica.'],
        correctAnswer:[0,9]},
    {question: '188. La pacientii cu EPA ce au ca afectiuni de baza astm bronsic, AVC, BPOC, se administreaza :',
        choices: [
            'a. morfina i.m, i.v. ;',
            'b. mialgin i.m, i.v. ;',
            'c. ambele.'],
        correctAnswer:[1,9]},
    {question: '189. Conduita de urgenta in IMA este:',
        choices: [
            'a. prevenirea mortii subite si preintampinarea complicatiilor ;',
            'b. prelungirea timpului pana la internarea in spital ;',
            'c. mobilizare precoce.'],
        correctAnswer:[0,9]},
    {question: '190. Atitudinea de urgenta in angina pectorala consta in :',
        choices: [
            'a. efectuarea examinarilor (transaminaze, glicemie, leucocite, VSH, radioscopie toracica, ECG)',
            'b. oprirea imediata a efortului fizic si administrarea de Nitroglicerina ;',
            'c. instituirea regimului igieno-dietetic.'],
        correctAnswer:[1,9]},
    {question: '191. Insuficienta cardiaca este :',
        choices: [
            'a. o stare anginoasa grava la care lipsesc semnele necrozei miocardice ;',
            'b. o tulburare de ritm cu o frecventa ventriculara neregulata ;',
            'c. un sindrom clinic care rezulta din imposibilitatea de a expulza intreaga cantitate de sange primita.'],
        correctAnswer:[2,9]},
    {question: '192. Cauzele determinante ale insuficientei cardiace sunt :',
        choices: [
            'a. valvulopatii dobandite si congenitale, HTP ;',
            'b. hTA ;',
            'c. gripa.'],
        correctAnswer:[0,9]},
    {question: '193. Manevrele prin care se poate obtine eliberarea cailor respiratorii se pot executa prin:',
        choices: [
            'a. curatirea orofaringelui, aspiratia, introducerea unei pipe Guedel;',
            'b. pozitiile diferite in care este asezat reanimatorul;',
            'c. hiperextensia capului si luxatia posterioara a mandibulei.'],
        correctAnswer:[0,9]},
    {question: '194. Semnele clinice in stopul cardio-respirator sunt :',
        choices: [
            'a. pastrarea cunostintei;',
            'b. mobilitatea globilor oculari;',
            'c. absenta pulsului la artera carotida, oprirea miscarilor respiratorii, toracice si abdominale.'],
        correctAnswer:[2,9]},
    {question: '195. Miopatia este o boala caracterizata prin:',
        choices: [
            'a. dificultatea de a decontracta muschii',
            'b. deficit muscular cu fatigabilitate musculara care apare sau se accentueaza laefort.',
            'c. slabiciune progresiva , atrofii musculare bilaterale si simetrice, interesind in principal muschii de la radacina membrelor'],
        correctAnswer:[2,9]},
    {question: '196. Polimiozita este o:',
        choices: [
            'a. inflamatie difuza a muschilor care pot cuprinde tegumente si/sau nervi invecinati',
            'b. afectiune de obicei congenitala',
            'c. afectiune caracterizata prin deficit muscular'],
        correctAnswer:[0,9]},
    {question: '197. Miotonia este o afectiune de obicei congenitala caracterizata prin:',
        choices: [
            'a. deficit muscular care apare sau se accentueaza la efort',
            'b. slabiciune progresiva , atrofii musculare bilaterale si simetrice',
            'c. dificultatea de a decontracta muschii'],
        correctAnswer:[2,9]},
    {question: '198. Sindromul de neuron motor periferic reprezinta:',
        choices: [
            'a. ansamblul de simptome si semne provocate de leziunea neuronului motor periferic pe traiectul sau medular, radicular sau trunchiular.',
            'b. o boala virala care atinge celulele motorii din coarnele anterioare ale maduvii spinarii.',
            'c. o afectiune degenerativa simetrica a cornului medular anterior'],
        correctAnswer:[0,9]},
    {question: '199. Poliomielita anterioara acuta sau Maladia Heine Medine este:',
        choices: [
            'a. o afectiune degenerativa simetrica a cornului medular anterior',
            'b. o boala virala care atinge celulele motorii din coarnele anterioare ale maduvei spinarii',
            'c. o boala degenerativa care apare la virsta adulta'],
        correctAnswer:[1,9]},
    {question: '200. Scleroza laterala amiotrofica debuteaza intre:',
        choices: [
            'a. 20-40 ani',
            'b. 10-20 ani',
            'c. 40-60 ani'],
        correctAnswer:[0,9]},
    {question: '201.Poliomielita anterioara cronica este:',
        choices: [
            'a. o boala virala care atinge celulele motorii din coarnele anterioare ale maduvei spinarii',
            'b. o afectiune degenerativa simetrica a cornului medular anterior',
            'c. o boala cronica si progresiva'],
        correctAnswer:[1,9]},
    {question: '202. "Sindromul cozii de cal" se caracterizeaza prin:',
        choices: [
            'a. paralizia flasca a membrelor inferioare cu reflexe abolite, atrofii si tulburari de sensibilitate, tulburari sfincteriene si genitale.',
            'b. sindrom senzitivo-motor, bilateral si simetric , cu aspect polinevritic.',
            'c. formarea unor cavitati in portiunea centrala a maduvii sau a bulbului.'],
        correctAnswer:[0,9]},
    {question: '203. Plexitele se caracterizeaza prin:',
        choices: [
            'a. sindrom senzitivo-motor bilateral si simetric',
            'b. sindrom de neuron motor periferic, la care se asociaza adesea tulburari de sensibilitate',
            'c. paralizia flasca a membrelor inferioare'],
        correctAnswer:[1,9]},
    {question: '204. Nevritele se datoresc:',
        choices: [
            'a. unor viroze, compresiuni (fracturi, tumori) sau unor traumatisme ale nervilor',
            'b. unui tratament insuficient',
            'c. unui proces inflamator local'],
        correctAnswer:[0,9]},
    {question: '205. Paralizia faciala este caracterizata prin:',
        choices: [
            'a. deficit motor la nivelul degetelor, in special a policelui',
            'b. tulburari motorii, senzitive si trofice',
            'c. stergerea cutelor fruntii de partea bolnava, imposibilitatea inchiderii complete a ochiului, deviatia gurii spre partea sanatoasa, imposibilitatea de a fluiera.'],
        correctAnswer:[2,9]},
    {question: '206. Tratamentul paraliziei nervilor este:',
        choices: [
            'a. in primul rind etiologic, eventual chirurgical sau ortopedic',
            'b. consta in Roentgenterapie',
            'c. nespecific (vasodilatatoare, masuri de igiena).'],
        correctAnswer:[0,9]},
    {question: '207. Sindromul de neuron motor central sau sindromul piramidal apare:',
        choices: [
            'a. in accidente vasculare cerebrale, tumori cerebrale si medulare, mielite, fracturi de rahis, scleroza laterala amiotrofica.',
            'b. in leziunea corpului celular sau a fibrelor acestuia',
            'c. apare mai ales vara si toamna.'],
        correctAnswer:[0,9]},
    {question: '208. Hemiplegia flasca se caracterizeaza prin:',
        choices: [
            'a. forta musculara de obicei diminuata mult',
            'b. semne de paralizie faciala, hipotonie si reflexe osteotendinoase abolite, semnul Babinski prezent.',
            'c. absenta semnului Babinski si a tulburarilor sfincteriene'],
        correctAnswer:[1,9]},
    {question: '209. Ateroscleroza cerebrala debuteaza:',
        choices: [
            'a. lent, prin tulburari nevrotice: cefalee, astenie, insomnie, vijiituri in urechi, ameteli, tulburari de memorie.',
            'b. in jurul virstei de aproximativ 45 de ani',
            'c. mai frecvent la femei in perioada de menopauza.'],
        correctAnswer:[0,9]},
    {question: '210. Evolutia aterosclerozei dureaza intre:',
        choices: [
            'a. 2-15 ani',
            'b. 1-2 ani',
            'c. 10-20 ani'],
        correctAnswer:[0,9]},
    {question: '211. Psihoza maniaco-depresiva se manifestata clinic prin:',
        choices: [
            'a. stare depresiva, anxietate cu idei delirante, halucinatii auditive, iluzii verbale.',
            'b. accese periodice de manie sau melancolie, sau prin alterarea acestor doua forme de boala.',
            'c. tulburari de memorie, de atentie, dezorientare.'],
        correctAnswer:[1,9]},
    {question: '212. Tratamentul aterosclerozei cerebrale consta in:',
        choices: [
            'a. odihna, administrare de hormoni (foliculina), Gerovital, Mecopar, Vit. B6, tranchilizante,neuroleptice.',
            'b. regim alimentar bogat in vitamine, sarac in substante azotoase.',
            'c. tratament cu antibiotice, tonice cardiace, vitamine'],
        correctAnswer:[0,9]},
    {question: '213. Tabloul clinic al melancoliei este caracterizat prin:',
        choices: [
            'a. indispozitie , tulburari digestive, tulburari respiratorii sau tulburari psihice;',
            'b. dispozitie trista, idiotie incetinita, aparitia unei senzatii neplacute cu lipsa poftei de mincare, lipsa de imbold in activitate, abatut, vorbeste in soapta.',
            'c. tulburari in sfera activitatii si vointei'],
        correctAnswer:[1,9]},
    {question: '214. La un bolnav cu arsuri de gradul I pe 20% din suprafata corpului evoloutia se complica :',
        choices: [
            'a. cu soc hipovolemic',
            'b. nu se complica',
            'c. cu soc toxico-septic'],
        correctAnswer:[1,9]},
    {question: '215. Gasim flictene cu continut sero-citrin in ?',
        choices: [
            'a. arsura de gradul I',
            'b. arsura de gradul II',
            'c. arsura de gradul III-IV'],
        correctAnswer:[1,9]},
    {question: '216 In arsurile de gradul II si de gradul III durerile sunt :',
        choices: [
            'a. de aceeasi intensitate',
            'b. in arsurile de grd III sunt mai mici decit in arsurile de grd II',
            'c. in arsurile grd III sunt mai mari decit durerile din arsurile grd II'],
        correctAnswer:[1,9]},
    {question: '217. Arsurile de gradul IV sunt mai putin provocatoare de soc imediat deoarece :',
        choices: [
            'a. plasmoragia nu se produce din cauza ca sunt mai profunde',
            'b. terminatiile din derm sunt distruse',
            'c. organismul se adapteaza mai usor la arsurile de grd IV'],
        correctAnswer:[1,9]},
    {question: '218. Nefrita acuta, bronhopneumonie, embolia pulmonara, hemoragia digestiva, aparute drept complicatii in arsura se datoreaza:',
        choices: [
            'a. intoxicatiei masive a organismului cu substante toxice resorbite din regiuneaarsa',
            'b. socului hipovolemic',
            'c. profunzimii arsurilor'],
        correctAnswer:[0,9]},
    {question: '219. in cazul unui accident colectiv, primii evacuati spre unitatile sanitare de specialitate vor fi:',
        choices: [
            'a. accidentatii agitati',
            'b. arsii apatici care reactioneaza lent si numai la stimuli puternici',
            'c. arsii cu leziuni combinate'],
        correctAnswer:[1,9]},
    {question: '220. Profilaxia antitetanica in arsuri intinse se face cu:',
        choices: [
            'a. A.T.P.A 0.5 ml',
            'b. ser antitetanic 3000 U',
            'c. A.T.P. A si ser antitetanic 3000 U'],
        correctAnswer:[2,9]},
    {question: '221. In cazul in care un accidentat adus la spital este in stare de soc interventia prioritara consta in:',
        choices: [
            'a. indepartarea flictenelor si a corpilor straini',
            'b. efectuarea tratamentului antisoc, concomitent cu indepartarea hainelor, dezinfectia tegumentelor si indepartarea flictenelor',
            'c. efectuarea tratamentului antisoc inaintea oricarei manevre chirurgicale'],
        correctAnswer:[2,9]},
    {question: '222. in cazul in care evolutia arsurilor este favorabila, se considera perioada optima pentru grefare:',
        choices: [
            'a. primele zile de la producerea arsurii',
            'b. a treia saptamina (14-16 zile)',
            'c. oricind, arsul sa nu fie in soc si sa nu prezinte infectie'],
        correctAnswer:[1,9]},
    {question: '223. La bolnavii cu leziuni profunde ale capului, fetei si care prezinta arsuri ale cailor respiratorii se va efectua:',
        choices: [
            'a. dezobstructia cailor respiratorii',
            'b. anestezie a cailor respiratorii superioare, oxigenoterapie',
            'c. traheostomie'],
        correctAnswer:[2,9]},
    {question: '224. La arsii cu leziuni circulare pe membre, pentru prevenirea fenomenelor de ischemie periferica, se va practica:',
        choices: [
            'a. excizia completa a escarelor',
            'b. excizia partiala a escarelor',
            'c. incizii de decompresiune, care traverseaza regiunea de escara de la un cap la altul, depasind-o in tesut sanatos in profunzime'],
        correctAnswer:[2,9]},
    {question: '225. Cum se calculeaza cantitatea de lichide ce trebuie administrata in primele 3-4 zile unui ars?',
        choices: [
            'a. necesarul de lichide este de 1 ml pentru fiecare procent de suprafata arsa, inmultit cu suprafata arsa si greutatea corporala',
            'b. se administreaza cite 50 ml pentru fiecare procent de suprafata arsa',
            'c. se calculeaza inmultind suprafata arsa cu profunzimea arsurii'],
        correctAnswer:[0,9]},
    {question: '226. Care din caracteristicele de mai jos corespund arsurile produse de baze chimice?',
        choices: [
            'a. escarele de culoare galben bruna ce apar imediat',
            'b. egscarele se formeaza lent, actionind si dupa accident, transformindu-se dintr- rad inferior in grad superior',
            'c. nu au caracteristici speciale, toate substantele chimice produc acelasi tip de arsuri'],
        correctAnswer:[1,9]},
    {question: '227. Pentru neutralizarea acizilor in caz de arsuri, se vor folosi:',
        choices: [
            'a. cloramina, apa oxigenata',
            'b. amoniac 1%, bicarbonat de sodiu',
            'c. ser fiziologic, apa sterila'],
        correctAnswer:[1,9]},
    {question: '228. in cazul electrocutarii, local, se produc arsuri de gradul',
        choices: [
            'a. II',
            'b. III',
            'c. IV'],
        correctAnswer:[2,9]},
    {question: '229.Daca din motive obiective sondajul vezical nu se poate efectua, se practica:',
        choices: [
            'a. administrarea de substante medicamentoase diuretice',
            'b. punctie vezicala deasupra simfizei pubiene pe linie mediana',
            'c. reinterventie chirurgicala'],
        correctAnswer:[1,9]},
    {question: '230. Profilaxia escarei postoperatorii este adesea dificila, dar este mai usoara decat tratamentul ulceratiei costituite. Ea urmareste:',
        choices: [
            'a. suprimarea presiunii, asigurarea unei bune stari a tegumenetelor expuse, mentinerea unei bune nutritii',
            'b. toaleta tegumentelor si mentinerea zonelor de spijin maxim pentru a nu leza si alte zone',
            'c. starea lenjeriei si mentinerea unei bune nutritii nu prezinta importanta'],
        correctAnswer:[0,9]},
    {question: '231. In profilaxia escarelor postoperatorii, suprimarea presiunii de pe ariile cutanate amenintate se poate realiza prin:',
        choices: [
            'a. mobilizarea precoce, schimbarea pozitiei in pat, asigurarea unei lenjerii corespunzatoare',
            'b. schimimobbailirzeaarepaanbsoalnmaevnut luui lulai pat fara a-i schimba pozitia decat odata cu',
            'c. asigurarea unei alimentatii deshidratante si schimbarea pozitiei in pat'],
        correctAnswer:[0,9]},
    {question: '232.In hemoragiile postoperatorii care se manifesta ca hemoragii intraperitoneale se impune:',
        choices: [
            'a. reinterventia chirurgicala de urgenta sub protectia transfuziei de sange',
            'b. numai tratament medical cu hemostatice',
            'c. numai punga cu gheata local'],
        correctAnswer:[0,9]},
    {question: '233.Meteorismul abdominal postoperator poate fi:',
        choices: [
            'a. un simplu ileus dinamic pasager',
            'b. complicatie digestiva postoperatorie grava',
            'c. un incident intraoperator'],
        correctAnswer:[0,9]},
    {question: '234. Ajutam la disparitia meteorismului abdominal postoperator prin:',
        choices: [
            'a. aspiratie gastrica',
            'b. plasarea unui tub de gaze in anus',
            'c. clisma evacuatorie imediat dupa interventia chirurgicala'],
        correctAnswer:[0,9]},
    {question: '235. In cazul aparitiei in postoperator al ileusului paralitic:',
        choices: [
            'a. se face aspiratie gastrica, se corecteaza tulburarile hidroelectrolitice, se face clisma evacuatorie',
            'b. se administreaza purgative si alimentatie semilichida',
            'c. se alimenteaza bolnavul normal'],
        correctAnswer:[0,9]},
    {question: '236. Se reintervine chirurgical daca ileusul paralitic postoperator:',
        choices: [
            'a. este adinamic',
            'b. este consecinta unei peritonite',
            'c. nu cedeaza la tratament cu miostin'],
        correctAnswer:[1,9]},
    {question: '237. Ocluzia mecanica postoperatorie este mai frecventa dupa interventiile chirurgicale pentru:',
        choices: [
            'a. abdomen acut traumatic',
            'b. abdomen acut netraumatic',
            'c. rezolvarea unor aderente sau bride'],
        correctAnswer:[1,9]},
    {question: '238.Varsaturile care apar imediat dupa interventia chirurgicala au drept cauza:',
        choices: [
            'a. narcoza si iritatia peritoneala',
            'b. aparitia unui ulcer de stres',
            'c. nu s-a administrat clisma evacuatorie in preziua operatiei'],
        correctAnswer:[0,9]},
    {question: '239.Complicatia cea mai grava a trombozelor din sistemul cav inferior este:',
        choices: [
            'a. edemul pulmonar acut',
            'b. embolia pulmonara',
            'c. tromboflebita postoperatorie'],
        correctAnswer:[1,9]},
    {question: '240.Profilaxia emboliei pulmonare postoperatorii urmareste prevenirea trombozelor venoase si a declansarii tromboemboliei in:',
        choices: [
            'a. preoperator',
            'b. postoperator',
            'c. pre -, intra - si postoperator'],
        correctAnswer:[2,9]},
    {question: '241. Tratamentul curativ in embolia pulmonara are urmatoarele obiective:',
        choices: [
            'a. terapia socului, asfixiei, durerii si hipercoagulabilitatii',
            'b. terapia asfixiei, durerii si administrarea de hemostatice',
            'c. administrarea de solutii perfuzabile in cantitate cat mai mare'],
        correctAnswer:[0,9]},
    {question: '242. Infarctul miocardic apare frecvent in postoperator:',
        choices: [
            'a. la persoane obeze, diabetice,care prezinta un risc mare cardiovascular',
            'b. la toti cardiacii, indiferent de amploarea interventiei chirurgicale',
            'c. la hipertensivi'],
        correctAnswer:[0,9]},
    {question: '243. Tratamentul profilactic in sindromul Mendelshon consta in:',
        choices: [
            'a. golirea preoperatorie a stomacului, sonda de aspiratie gastrica, combaterea anxietatii',
            'b. golirea preoperatorie a tubului digestiv prin suprimarea alimentatiei si clisma evacuatorie',
            'c. administarea de inhibitori de secretie gastrica'],
        correctAnswer:[0,9]},
    {question: '244.In atelectazia pulmonara postoperatorie tratamentul curativ va urmari:',
        choices: [
            'a. dezobstructia bronhiilor si antibioterapie',
            'b. calmarea tusei si antibioterapie',
            'c. administrarea de vitamine si antiinflamatorii'],
        correctAnswer:[0,9]},
    {question: '245. Complicatiile respiratorii apar adeseori la bolnavii care au stat mult dupa interventia chirurgicala in pozitia:',
        choices: [
            'a. decubit lateral stang',
            'b. decubit dorsal',
            'c. decubit ventral'],
        correctAnswer:[1,9]},
    {question: '246.Atunci cand se practica interventie chirurgicala pe abdomenul superior si esofag, cea mai obisnuita complicatie respiratorie in postoperator este:',
        choices: [
            'a. insuficienta respiratorie acuta',
            'b. atelectazia pulmonara',
            'c. bronchopneumonia'],
        correctAnswer:[1,9]},
    {question: '247.In laringotraheita determinata de intubatia orotraheala tratamentul consta in:',
        choices: [
            'a. comprese reci in jurul gatului, repaus vocal, aerosoli, antitusive, antibiotice generale',
            'b. comprese calde in jurul gatului, repaus vocal, aerosoli, antitusive, antibiotice generale',
            'c. nu necesita tratament medical'],
        correctAnswer:[1,9]},
    {question: '248.In abcesul fesier, aparut in postoperator, tratamentul este chirurgical:',
        choices: [
            'a. in faza de congestie',
            'b. in faza de colectie',
            'c. cand zona este indurate'],
        correctAnswer:[1,9]},
    {question: '249. Cea mai grava complicatie infectioasa postoperatorie este:',
        choices: [
            'a. septicemia postoperatorie',
            'b. abcesul fesier',
            'c. infectarea plagii chirurgicale'],
        correctAnswer:[0,9]},
    {question: '250.Tratamentul profilactic in infectia urinara, ca si complicatie infectioasa postoperatorie, consta in:',
        choices: [
            'a. aplicarea de rutina a sondajului vezical',
            'b. aplicarea sondajului vezical in orice conditii',
            'c. aplicarea sondajului vezical, numai daca este indicatie precisa si numai in conditii de asepsie perfecta'],
        correctAnswer:[2,9]},
    {question: '251.Ulcerul gastro-duodenal perforat este cea mai frecventa si grava complicatie a ulcerului gastro- duodenal si afecteaza in cel mai mare procent:',
        choices: [
            'a. femeile peste 50 ani',
            'b. barbatii intre 30 si 50 ani',
            'c. femeile intre 30 si 50 ani'],
        correctAnswer:[1,9]},
    {question: '252.Diagnosticul diferential dintre o apendicita acuta si o sarcina extrauterina rupta poate fi facut prin:',
        choices: [
            'a. rezultatul hemoleucogramei',
            'b. sediul durerii',
            'c. starea generala, culoarea tegumentelor, rezultatul leucogramei'],
        correctAnswer:[2,9]},
    {question: '253.Colangiografia exploreaza:',
        choices: [
            'a. vezica biliara si caile biliare extrahepatice',
            'b. vezica biliara',
            'c. colonel'],
        correctAnswer:[0,9]},
    {question: '254.Examenul de urina se face obligatoriu in preoperator:',
        choices: [
            'a. numai la bolnavii care vor fi supusi la interventii chirurgicale renale',
            'b. la toti bolnavii chirurgicali',
            'c. la bolnavii care au ureea sanguina crescuta'],
        correctAnswer:[1,9]},
    {question: '255.Determinarea grupului sanguin si Rh- ului este obligatorie:',
        choices: [
            'a. numai la bolnavii care necesita transfuzie',
            'b. la bolnavii internati in serviciu de chirurgie',
            'c. numai la bolnavii cu hemoragii'],
        correctAnswer:[1,9]},
    {question: '256.Se gaseste un numar crescut de trombocite in urmatoarele situatii:',
        choices: [
            'a. traumatisme osoase usoare',
            'b. dupa hemoragii, splenesctomii, traumatisme abdominale',
            'c. dupa iradieri severe, aplazie medulara, leucemie acuta'],
        correctAnswer:[1,9]},
    {question: '257.Hemocultura reprezinta o analiza a sangelui care se recomanda in cursul:',
        choices: [
            'a. unei infectii urinare pentru identificarea agentului patogen',
            'b. unei septicemia pentru identificarea agentului patogen',
            'c. unei hemoragii pentru identificarea unei cauze infectioase'],
        correctAnswer:[1,9]},
    {question: '258.Dupa producerea unui traumatism abdominal inchis, decesul poate surveni in cateva minute de la accident prin:',
        choices: [
            'a. soc sau hemoragie masiva',
            'b. hemoragie interna lenta',
            'c. leziuni parietale'],
        correctAnswer:[0,9]},
    {question: '259.Daca dupa 6-8 ore starea generala a unui pacient cu traumatism abdominal, tinut sub observatie si tratament, nici nu se amelioreaza, nici nu se inrautateste:',
        choices: [
            'a. se efectueaza interventie chirurgicala exploratorie',
            'b. se externeaza pacientul',
            'c. se administreaza antialgice si se reia alimentatia'],
        correctAnswer:[0,9]},
    {question: '260.Unui pacient cu traumatism abdominal inchis i se poate pune diagnosticul de ruptura de stomac, daca radiografia abdominala ( pe gol) arata:',
        choices: [
            'a. prezenta aerului in cavitatea peritoneala',
            'b. prezenta lichidului in cavitatea peritoneala',
            'c. nu arata nici o modificare'],
        correctAnswer:[0,9]},
    {question: '261.Sub denumirea de plagi ale abdomenului sunt cuprinse toate leziunile determinate de un traumatism care:',
        choices: [
            'a. intereseaza si deschide peretele abdominal',
            'b. nu intereseaza peretele abdominal',
            'c. produce leziuni viscerale, dar nu lasa nici o urma pe peretele abdominal'],
        correctAnswer:[0,9]},
    {question: '262.Cele mai frecvente hemoragii "in doi timpi" sunt cele:',
        choices: [
            'a. ale ficatului',
            'b. ale pancreasului',
            'c. ale splinei'],
        correctAnswer:[2,9]},
    {question: '263.La hemoragia interna "in doi timpi", timpul intai consta in:',
        choices: [
            'a. hemoragia intra- sau subcapsulara',
            'b. ruperea capsulei si evacuarea sangelui in cavitatea abdominala',
            'c. sangele curge liber in abdomen'],
        correctAnswer:[0,9]},
    {question: '264.Pancreatita acuta este un sindrom abdominal acut caracterizat prin:',
        choices: [
            'a. dureri abdominale violente in etajul superior si alterare marcata a starii generale',
            'b. durere in hipocondrul drept cu iradiere in umar, stare generala usor alterata',
            'c. dureri in fosa iliaca dreapta cu greturi si varsaturi'],
        correctAnswer:[0,9]},
    {question: '265.Persoanele predispuse la imbolnavirea de pancreatita acuta sunt:',
        choices: [
            'a. bolnavii subponderali',
            'b. bolnavii cu ulcer perforat',
            'c. adultii obezi'],
        correctAnswer:[2,9]},
    {question: '266.Pancreatita acuta se produce prin autodigestia glandei de catre:',
        choices: [
            'a. tripsina',
            'b. amilaza',
            'c. tripsinogen'],
        correctAnswer:[0,9]},
    {question: '267.Tulburarile in evacuarea secretiei pancreatice in duoden, prin dereglari functionale ale sfincterului Oddi duc la:',
        choices: [
            'a. inflamarea pancreasului',
            'b. necrozarea pancreasului',
            'c. autodigestia pancreasului'],
        correctAnswer:[2,9]},
    {question: '268.Contuzia abdominala poate determina moartea in cateva zile de la producerea accidentului prin:',
        choices: [
            'a. hemoragie "in doi timpi"',
            'b. hemoragie interna lenta',
            'c. leziuni parietale'],
        correctAnswer:[0,9]},
    {question: '269.Diagnosticul de certitudine al ulcerului gastro-duodenal perforat se sprijina pe:',
        choices: [
            'a. antecedente ulceroase',
            'b. caracterul durerii si fenomenele digestive',
            'c. disparitia matitatii hepatice, punctia abdominala pozitiva si prezenta pneumotoraxului'],
        correctAnswer:[2,9]},
    {question: '270.Colecistita acuta este:',
        choices: [
            'a. o inflamatie acuta a peretului colecistic',
            'b. o inflamatie acuta a caii biliare extrahepatice',
            'c. o tulburare a motricitatii veziculei biliare'],
        correctAnswer:[0,9]},
    {question: '271.Diskineziile biliare reprezinta:',
        choices: [
            'a. tulburari date de parazitozele intraveziculare',
            'b. tulburari ale cailor biliare',
            'c. tulburarii ale motricitatii veziculei biliare'],
        correctAnswer:[2,9]},
    {question: '272.Diagnosticul prezumtiv clinic de perforatie ulceroasa se sprijina pe:',
        choices: [
            'a. caracterul durerii, semnele de peritonita si antecedentele ulceroase',
            'b. caracterul durerii si fenomenele digestive',
            'c. starea generala a bolnavului si prezenta fenomenelor digestive'],
        correctAnswer:[0,9]},
    {question: '273.Apendicita acuta are un singur tratament:',
        choices: [
            'a. medical',
            'b. medico- chirurgical',
            'c. chirurgical de urgenta'],
        correctAnswer:[2,9]},
    {question: '274.La un pacient cu abdomen acut, la care diagnosticul nu s-a precizat inca, este contraindicat sa se administreze:',
        choices: [
            'a. barbiturice',
            'b. antialgice',
            'c. antialgice majore (morfina, mialgin)'],
        correctAnswer:[2,9]},
    {question: '275.Cea mai frecventa forma a perforatiei ulcerului gastro-duodenal este:',
        choices: [
            'a. in organele din vecinatate',
            'b. perforatia acoperita',
            'c. in peritoneul liber'],
        correctAnswer:[2,9]},
    {question: '276.In evolutia sindromului ocluziv, tulburarile electrolitice care influenteaza negativ s ctarea bolnavului, ducand la soc, sunt:',
        choices: [
            'a. scaderea Cl+ sanguin, cresterea K+ si a ureei',
            'b. hemoconcentratia',
            'c. scaderea Ca+'],
        correctAnswer:[0,9]},
    {question: '277.Perforatia acoperita a ulcerului gastro-duodenal poate fi gasita in urmatoarele situatii:',
        choices: [
            'a. cand orificiul de perforatie este mic si suplu',
            'b. cand orificiul de perforatie se face pe un ulcer netratat',
            'c. cand orificiul de perforatie se deschide in stomacul plin'],
        correctAnswer:[0,9]},
    {question: '278. Angiocolitele sunt afectiuni inflamatorii:',
        choices: [
            'a. ale colecistului',
            'b. ale cailor biliare extra si intra hepatice',
            'c. ale colecistului si ale cailor biliare'],
        correctAnswer:[1,9]},
    {question: '279.Colica biliara se instaleaza frecvent:',
        choices: [
            'a. din cauza nealimentarii la timp',
            'b. dupa o masa bogata in legume si fructe',
            'c. dupa o masa bogata in grasimi sau alimente cu efect colecistochinetic recunoscut'],
        correctAnswer:[2,9]},
    {question: '280.Prezenta contracturii abdominale pe toata aria abdomenului, formand asa zisul " abdomen de lemn" , se intalneste in:',
        choices: [
            'a. ocluzia intestinala',
            'b. apendicita acuta',
            'c. ulcerul duodenal perforat'],
        correctAnswer:[2,9]},
    {question: '281.Daca un bolnav se prezinta in urgenta, avand o durere violenta in epigastru, ca o lovitura de pumnal, cu iradiere in hipocondrul drept, paloare, lipotimie, accelerarea pulsului, imobilitatea respiratiei in etajul abdominal superior, ne gandim la:',
        choices: [
            'a. pancreatita acuta',
            'b. apendicita acuta perforata',
            'c. ulcer gastro- duodenal perforat'],
        correctAnswer:[2,9]},
    {question: '282.In evolutia unei apendicite acute, peritonita acuta poate aparea:',
        choices: [
            'a. inaintea declansarii simpomatologiei apendiculare',
            'b. odata cu peritonita plastica localizata',
            'c. in primele 24-48 ore de la debutul crizei apendiculare'],
        correctAnswer:[2,9]},
    {question: '283.Aspectul anatomo- patologic al unei apendicite acute flegmonoase este:',
        choices: [
            'a. apendice marit de volum, cu aspect de "limba de clopot"',
            'b. apendice de culoare neagra- verzuie si aspect de "frunza vesteda"',
            'c. apendice congestionat'],
        correctAnswer:[0,9]},
    {question: '284.Intr-o litiaza biliara coloratia icterica persistenta a sclerelor, mucoaselor si tegumentelor poate fi data de:',
        choices: [
            'a. inflamatia peretului colecistic',
            'b. prezenta unui obstacol in coledoc',
            'c. un proces inflamator al cailor biliare'],
        correctAnswer:[1,9]},
    {question: '285.Volvulus- ul intestinal se traduce prin:',
        choices: [
            'a. rasucirea anselor intestinale',
            'b. un proces inflamator aparut dupa o interventie chirurgicala',
            'c. un inel de eventratie in care intra o ansa intestinala'],
        correctAnswer:[0,9]},
    {question: '286.Un plastron colecistic se poate trata astfel:',
        choices: [
            'a. interventie chirurgicala de urgenta',
            'b. antispastice, antibioterapie, regim alimentar',
            'c. regim alimentar, tratament medical, completat cu tratament chirurgical, peste 6-8 saptamani, dupa "racire"'],
        correctAnswer:[2,9]},
    {question: '287.Pentru prevenirea complicatiilor pulmonare ce pot aparea dupa interventiile chirurgicale pe tubul digestiv, se iau urmatoarele masuri cu pacientul operat:',
        choices: [
            'a. pozitionarea corespunzatoare, mobilizarea precoce, gimnastica respiratorie',
            'b. administrarea antibioticelor si mobilizarea',
            'c. combaterea tusei si gimnastica respirator'],
        correctAnswer:[0,9]},
    {question: '288.In perforatia urmatorului organ din cavitatea abdominala nu apare radiologic pneumoperitoneul:',
        choices: [
            'a. stomacului',
            'b. colonului',
            'c. veziculei biliare'],
        correctAnswer:[2,9]},
    {question: '289.In cazul unui abdomen acut chirurgical, cu semne de peritonita instalate, interventia chirurgicala este obligatoriu sa se practice in:',
        choices: [
            'a. 10-12 ore de la instalarea semnelor de peritonita',
            'b. 5-6 ore de la instalarea semnelor de peritonita',
            'c. 8-10 ore de la instalarea semnelor de peritonita'],
        correctAnswer:[1,9]},
    {question: '290.Bolnavii suferinzi de colecistita acuta trebuie neaparat:',
        choices: [
            'a. spitalizati si operati',
            'b. spitalizati si tratati medical',
            'c. tratati la domiciliu sub supravegherea medicului de familie'],
        correctAnswer:[0,9]},
    {question: '291.Aspectul anatomo- patologic al unei apendicite acute gangrenoase:',
        choices: [
            'a. apendice marit de volum cu aspect de "limba de clopot"',
            'b. apendice de culoare neagra- verzuie si aspect de "frunza vesteda"',
            'c. apendice congestionat'],
        correctAnswer:[1,9]},
    {question: '292.Tratamentul in plastronul apendicular consta in:',
        choices: [
            'a. se trateaza medical si, dupa racirea procesului, se intervine chirurgical',
            'b. se intervine chirurgical de urgenta',
            'c. se trateaza medical'],
        correctAnswer:[0,9]},
    {question: '293.Plagile abdominale penetrante sunt plagile in care agentul traumatic a penetrat:',
        choices: [
            'a. in peritoneu, dar a lezat si perforat mai multe organe',
            'b. in peritoneu, dar a lezat un organ',
            'c. in peritoneu, dar nu a lezat nici un organ'],
        correctAnswer:[2,9]},
    {question: '294.Plastronul apendicular este:',
        choices: [
            'a. o peritonita plastica',
            'b. o tumora maligna apendiculara',
            'c. o inflamatie a apendicului'],
        correctAnswer:[0,9]},
    {question: '295.In ocluziile intestinale vechi, varsaturile sunt:',
        choices: [
            'a. fecaloide',
            'b. bilioase',
            'c. alimentare'],
        correctAnswer:[0,9]},
    {question: '296.Varsaturile fecaloide apar precoce in ocluziile:',
        choices: [
            'a. intestinale inalte',
            'b. intestinale joase',
            'c. intestinale functionale'],
        correctAnswer:[0,9]},
    {question: '297.Bolnavul care a suferit un traumatism abdominal va fi asezat corect in pozitia:',
        choices: [
            'a. de decubit dorsal cu membrele pelviene usor flectate (sub genunchi se aseaza o patura rulata sau o perna',
            'b. de decubit lateral drept sau stang, de partea traumatismului',
            'c. semisezanda, cu genunchii flectati, pentru a asigura compresiunea abdomenului'],
        correctAnswer:[0,9]},
    {question: '298.Conduita de urgenta in ocluzia intestinala mecanica instalata de foarte scurt timp consta in:',
        choices: [
            'a. linistirea pacientului, sonda de aspiratie gastrica, clisma pentru golirea segmentului de sub ocluzie',
            'b. hidratare, clisma evacuatorie',
            'c. sedarea pacientului si reluarea treptata a alimentatiei'],
        correctAnswer:[0,9]},
    {question: '299.Plagile abdominale care prezinta o mai mare gravitate sunt:',
        choices: [
            'a. cele perforante',
            'b. cele penetrante',
            'c. cele care intereseaza numai peretele abdominal'],
        correctAnswer:[0,9]},
    {question: '300.Prin ulcerul gastro-duodenal intelegem:',
        choices: [
            'a. deschiderea ulcerului in cavitatea libera peritoneala',
            'b. deschiderea ulcerului intr-un organ plin (ficat, pancreas)',
            'c. perforatia peritoneului'],
        correctAnswer:[0,9]},
    {question: '301.Daca prin plaga abdominala se scurge bila sau continut gastric, plaga:',
        choices: [
            'a. este penetranta',
            'b. intereseaza calea biliara sau stomacul',
            'c. intereseaza numai peretele abdominal'],
        correctAnswer:[1,9]},
    {question: '302.Un abdomen acut chirurgical cu sediul durerii juxtapubian arata o perforatie a:',
        choices: [
            'a. stomacului si duodenului',
            'b. uterului',
            'c. intestinului mezenterial si colonului'],
        correctAnswer:[2,9]},
    {question: '303.In apendicita acuta perforata durerea este:',
        choices: [
            'a. violenta, cu prezenta " abdomenului de lemn"',
            'b. violenta, generalizata de la inceput in intreg abdomenul',
            'c. initiala in fosa iliaca dreapta, brusca, violenta'],
        correctAnswer:[2,9]},
    {question: '304.Tratamentul chirurgical al unei colecistite acute consta in:',
        choices: [
            'a. colecistectomie',
            'b. colecistostomie',
            'c. colecistectomie cu coledocotomie'],
        correctAnswer:[0,9]},
    {question: '305.Colecistita acuta reprezinta:',
        choices: [
            'a. inflamatia acuta a peretului vezicular, coexistand in majoritatea cazurilor cuun obstacol infundibulo-cistic',
            'b. inflamatia cailor biliare extrahepatice',
            'c. inflamatia acuta a peretilor cailor biliare coexistand cu prezenta unui calcul in coledoc'],
        correctAnswer:[0,9]},
    {question: '306.Coloratia subicterica a sclerelor, mucoaselor si tegumentelor poate fi data de:',
        choices: [
            'a. spasmul reflex al sfincterului Oddi',
            'b. prezenta unui obstacol in coledoc',
            'c. dischinezia biliara'],
        correctAnswer:[0,9]},
    {question: '307.Intr-o pancreatita acuta, cu evolutie fara complicatii, tratamentul de baza este medical si in conducerea tratamentului se va tine seama de:',
        choices: [
            'a. evolutia starii generale, a febrei, a leucocitozei, a amilazemiei',
            'b. evolutia durerii si posibilitatea de reluare rapida a alimentatiei',
            'c. sedarea bolnavului si reluarea cat mai rapid a vietii normale'],
        correctAnswer:[0,9]},
    {question: '308.Colecistectomia cu coledocotomie se practica ca tratament chirurgical in:',
        choices: [
            'a. colecistita acuta',
            'b. colecistita acuta cu calcul prezent si in coledoc',
            'c. dischinezia biliara'],
        correctAnswer:[1,9]},
    {question: '309.In cazul unei ocluzii intestinale mecanice instalate de mai multa vreme, atitudinea de urgenta consta in:',
        choices: [
            'a. montarea unei sonde de aspiratie gastrica, abord venos pentru recoltarea sangelui in vederea efectuarii probelor de laborator si montarea unei perfuzii pentru reechilibrarea hidroelectrolitica',
            'b. recoltarea sangelui in vederea determinarii unor probe de laborator si calmarea durerii',
            'c. se face direct interventia chirurgicala'],
        correctAnswer:[0,9]},
    {question: '310.Peritonita acuta difuza rezulta din:',
        choices: [
            'a. localizarea unui proces infectios la nivelul unui organ din cavitatea abdominala',
            'b. reactia locala a peritoneului si viscerelor abdominale si reactia generala determinata de actiunea agresiva a germenilor ajunsi in peritoneu',
            'c. patrunderea germenilor in cavitatea abdominala si inflamarea locului de patrundere'],
        correctAnswer:[1,9]},
    {question: '311.Peritonita acuta difuza poate fi secundara patrunderii germenilor prin:',
        choices: [
            'a. perforarea unui organ cavitar datorata unui proces patologic sau traumatic',
            'b. perforarea peritoneului si localizarea procesului infectios la perete',
            'c. prin localizarea procesului infectios la nivelul unui organ cavitar'],
        correctAnswer:[0,9]},
    {question: '312.Ingrijirea postoperatorie, dupa rezolvarea chirurgicala a unei ocluzii intestinale mecanice, consta in:',
        choices: [
            'a. calmarea durerii si reluarea alimentatiei',
            'b. se continua tratamentul de reechilibrare hemodinamica, de refacere a starii generale pana la reluarea tranzitului',
            'c. ingrijirea plagii operatorii si reluarea alimentatiei'],
        correctAnswer:[1,9]},
    {question: '313.In peritonita acuta, secundara ulcerului gastric perforat, datorita caracterului foarte iritant al sucului gastric ajuns in peritoneu, simptomul caracteristic este:',
        choices: [
            'a. durerea extrem de vie in epigastru, care nu se generalizeaza in tot abdomenul, dar este insotita de greturi si varsaturi',
            'b. durerea extrem de vie in epigastru, fara un simptom premergator, care se generalizeaza in tot abdomenul, dar cu o intesitate mai crescuta la locul aparitiei',
            'c. durere surda in epigastru, cu iradiere in umarul drept, insotita de greturi si varsaturi'],
        correctAnswer:[1,9]},
    {question: '314.In ulcerul gastric si duodenal perforat, este caracteristica :',
        choices: [
            'a. durerea epigastrica de intensitate deosebita "ca o lovitura de pumnal", urmata de rigiditatea abdomenului "de lemn"',
            'b. d"udreerea epigastrica de intensitate medie, insotita de rigiditatea abdomenului lemn"',
            'c. durerea insidioasa localizata in hipocondrul drept, cu iradiere in epigastru'],
        correctAnswer:[0,9]},
    {question: '315.Caractersisticile durerii din peritonita acuta prin perforarea colecistului sunt:',
        choices: [
            'a. apare in hipocondrul drept, coboara pe flancul drept in fosa iliaca dreapta, generalizandu-se apoi in tot abdomenul',
            'b. apare brusc o durere vie in tot abdomenul, cu o intensitate usor crescuta in hipocondrul drept',
            'c. apare o durere vie in epigastru, care se generalizeaza in tot abdomenul'],
        correctAnswer:[0,9]},
    {question: '316.Dintre urmatoarele lichide ajunse in peritoneu, patologic sau traumatic, foarte iritant este:',
        choices: [
            'a. lichidul evacuat din intestinul subtire',
            'b. sucul gastric',
            'c. bila'],
        correctAnswer:[0,9]},
    {question: '317.Peritonita acuta localizata este acea forma a peritonitei in care:',
        choices: [
            'a. procesul infectios este localizat in regiunea in care a aparut',
            'b. procesul infectios apare la nivelul peretelui abdominal',
            'c. procesul infectios cuprinde tot abdomenul'],
        correctAnswer:[0,9]},
    {question: '318.Pentru combaterea unor complicatii frecvente dupa interventiile chirurgicale pe tubul digestiv, in caz de varsaturi, se iau urmatoarele masuri:',
        choices: [
            'a. se administreaza medicatie antiemetica',
            'b. se instaleaza sonda de aspiratie pentru evacuarea stazei gastrice si se administreaza, dupa caz, si medicatie antiemetica',
            'c. se reia treptat alimentatia'],
        correctAnswer:[1,9]},
    {question: '319.Peritonita acuta localizata in regiunea pelviana se numeste:',
        choices: [
            'a. peritonita apendiculara',
            'b. peritonita genitala',
            'c. pelviperitonita'],
        correctAnswer:[2,9]},
    {question: '320.De obicei, peritonitele acute localizate au tendinta de vindecare daca se aplica un tratament constand in:',
        choices: [
            'a. repaos la pat, regim alimentar, antibioterapie, iar dupa "racire" interventie chirurgicala',
            'b. pregatirea pacientului pentru interventia chirurgicala de urgenta',
            'c. calmarea durerii si combaterea febrei'],
        correctAnswer:[0,9]},
    {question: '321.In colecistita acuta, durerea poate fi combatuta si prin mijloace nefarmacologice, aplicate local:',
        choices: [
            'a. sac cu nisip',
            'b. punga CU gheata',
            'c. compresie calda'],
        correctAnswer:[1,9]},
    {question: '322.Intr-o plaga abdominala penetranta cu evisceratie posttraumatica, se iau la locul accidentului urmatoarele masuri locale:',
        choices: [
            'a. se executa manevre de reducere a anselor intestinale in interior si se pune un camp deasupra, fixat de o fasa compresiva',
            'b. se aplica pansament foarte compresiv',
            'c. nu se vor executa manevre de reducere a anselor intestinale, se pun deasupra campuri umede caldute fixate de o fasa necompresiva'],
        correctAnswer:[2,9]},
    {question: '323.Urmatoarele afectiuni pot fi considerate peritonite acute localizate:',
        choices: [
            'a. plastronul colecistic',
            'b. colecistita acuta',
            'c. apendicita acuta'],
        correctAnswer:[0,9]},
    {question: '324.La un pacient care prezinta ocluzie intestinala starea generala se altereaza progresiv si sindromul ocluziv este mai putin alarmant in:',
        choices: [
            'a. tumora intestinala',
            'b. volvulus intestinal',
            'c. carcinomatoza peritoneala'],
        correctAnswer:[0,9]},
    {question: '325.La alterarea starii generale din ocluzia intestinala un rol determinant il au tulburarile de hemodinamica deoarece:',
        choices: [
            'a. intestinul absoarbe doar 10-20% din continutul intestinal',
            'b. intestinul absoarbe 90% din continutul care circula prin el',
            'c. intestinul absoarbe 70% din continutul care circula prin el'],
        correctAnswer:[0,9]},
    {question: '326.Durerea intensa, colicativa in hipocondrul drept cu iradiere in umar si spate,insotita de febra si care nu cedeaza sau este foarte putin influentata de antialgice si antispastice este produsa de:',
        choices: [
            'a. colecistita acuta',
            'b. apendicita acuta subhepatica',
            'c. pancreatita acuta'],
        correctAnswer:[0,9]},
    {question: '327.Conduita de urgenta intr-o colica biliara internata in spital consta in:',
        choices: [
            'a. repaos la pat, regim alimentar hidric, analgetice, antispastice, antiemetice',
            'b. recoltarea probelor de sange, perfuzie, calmarea durerii, combaterea infectiei, calmarea varsaturilor, punga cu gheata si interventie chirurgicala',
            'c. tubaj duodenal, morfina, pregatire pentru interventia chirurgicala'],
        correctAnswer:[1,9]},
    {question: '328.Forma edematoasa a pancreatitei acute se caracterizeaza prin:',
        choices: [
            'a. edemul sfincterului Oddi',
            'b. cresterea in volum a pancreasului',
            'c. proces supurativ al pancreasului'],
        correctAnswer:[1,9]},
    {question: '329.Pancreatita acuta hemoragica se caracterizeaza printr-o:',
        choices: [
            'a. sangerare subcapsulara masiva si ruperea capsulei sub presiunea hematomului',
            'b. sangerare peritoneala',
            'c. sangerare provocata sub presiunea hematomului splenic'],
        correctAnswer:[0,9]},
    {question: '330.Plagile abdominale perforante sunt plagile in care agentul traumatic:',
        choices: [
            'a. a penetrat in peritoneu, dar nu a lezat nici un organ',
            'b. a lezat si perforat unul sau mai multe organe',
            'c. nu a penetrat peritoneul, dar a lezat unul sau mai multe organe'],
        correctAnswer:[1,9]},
    {question: '331.In vederea interventiei chirurgicale la un bolnav cu ocluzie intestinala este foarte bine sa se cunoasca:',
        choices: [
            'a. ora ultimei mese',
            'b. cauza care a determinat ocluzia',
            'c. de cand s-a instalat ocluzia'],
        correctAnswer:[1,9]},
    {question: '332.Ocluziile intestinale mecanice pot fi provocate de obstacole intrinseci :',
        choices: [
            'a. volvulus intestinal',
            'b. tumora intestinala maligna',
            'c. tumora abdominala'],
        correctAnswer:[0,9]},
    {question: '333.Ancheta epidemiologica definitiva presupune :',
        choices: [
            'a. efectuarea de catre medicul de familie ;',
            'b. incheierea o data cu limitarea focarului ;',
            'c. completarea anchetei preliminare cu investigatii si masuri eficiente si incheierea o data cu limitarea focarului .'],
        correctAnswer:[2,9]},
    {question: '334.Controlul medical periodic anual al personalului din sectorul alimentar se face prin :',
        choices: [
            'a. examene clinice ;',
            'b. coproculturi, rx.pulmonar, RBW;',
            'c. ecografie abdominala .'],
        correctAnswer:[1,9]},
    {question: '335.Dezinfectia urmareste :',
        choices: [
            'a. indepartarea agentilor patogeni de pe tegumente si de pe diferite obiecte din mediul extern;',
            'b. distrugerea agentilor patogeni din profunzime, prin mijloace fizice si chimice;',
            'c. indepartarea si distrugerea agentilor patogeni de pe tegumente si diferite obiecte din mediul extern, prin mijloace fizice, chimice si mecanice.'],
        correctAnswer:[2,9]},
    {question: '336.Sterilizarea urmareste :',
        choices: [
            'a. neutralizarea agentilor patogeni de pe toate suprafetele ce vin in contact cu bolnavul;',
            'b. distrugerea tuturor microorganismelor patogene si nepatogene inclusiv a sporilor de pe obiecte cu utilizare medicala;',
            'c. inactivarea agentilor patogeni existenti pe suprafata instrumentelor chiurgicale'],
        correctAnswer:[1,9]},
    {question: '337.Dezinsectia de combatere utilizeaza in mod curent :',
        choices: [
            'a. metode fizice, chimice si biologice ;',
            'b. metode genetice ;',
            'c. ambele raspunsuri sunt corecte .'],
        correctAnswer:[0,9]},
    {question: '338.Angina ulceronecrotica, ca forma a anginei streptococice, se intalneste :',
        choices: [
            'a. cu mult mai rar;',
            'b. frecvent;',
            'c. niciodata.'],
        correctAnswer:[0,9]},
    {question: '339.Din punct de vedere clinic, anginele se clasifica astfel:',
        choices: [
            'a. angine : rosii, albe, ulceroase;',
            'b. angine: rosii , necrotice;',
            'c. angine : rosii , albe .'],
        correctAnswer:[0,9]},
    {question: '340.Tratamentul anginei streptococice consta in administrarea de :',
        choices: [
            'a. penicilina ;',
            'b. tetraciclina si cloramfenicol;',
            'c. doxiciclina.'],
        correctAnswer:[0,9]},
    {question: '341.Scarlatina este o boala infectioasa produsa de :',
        choices: [
            'a. streptococul beta-hemolitic din grupa A;',
            'b. stafilococul auriu;',
            'c. streptococul alfa hemolitic din grupa B.'],
        correctAnswer:[0,9]},
    {question: '342.Scarlatina se manifesta clinic in perioada de debut prin :',
        choices: [
            'a. angina, febra moderata, eruptie fugace ;',
            'b. febra mare, angina, cefalee, varsaturi;',
            'c. febra, angina, tahicardie, varsaturi.'],
        correctAnswer:[1,9]},
    {question: '343.Eruptia in scarlatina este:',
        choices: [
            'a. micropapuloasa, aspra la pipait;',
            'b. micropapuloasa, catifelata la pipait;',
            'c. veziculara .'],
        correctAnswer:[0,9]},
    {question: '344.Pentru scarlatina distinctiv este semnul :',
        choices: [
            'a. Grozovici - Pastia, cu elemente purpurice dispuse linear la nivelul plicei cotului si inghinal;',
            'b. Koplik - roseata difuza a mucoasei bucale, o dunga alba pe gingii(dunga Appert);',
            'c. Masca Filatov, semnul Pastia si ciclul lingual.'],
        correctAnswer:[2,9]},
    {question: '345.Exantemul scarlatinos apare mai intai :',
        choices: [
            'a. pe gat si torace;',
            'b. membre superioare;',
            'c. fata anterioara a toracelui si abdomen.'],
        correctAnswer:[0,9]},
    {question: '346.Angina rosie + febra + eruptie micropapuloasa pe trunchi, respectand fata, va sugereaza :',
        choices: [
            'a. varicela;',
            'b. rujeola;',
            'c. scarlatina .'],
        correctAnswer:[2,9]},
    {question: '347.Copilul cu scarlatina este tratat:',
        choices: [
            'a. obligatoriu in spital de catre medical specialist ;',
            'b. la domiciliu ;',
            'c. de catre medical scolar.'],
        correctAnswer:[0,9]},
    {question: '348.Manifestarile clinice in scarlatina sunt determinate de actiunea :',
        choices: [
            'a. streptococilor alfa- hemolitici;',
            'b. streptococci beta -hemolitici;',
            'c. toxina scarlatinoasa (Dick) eliberata de streptococul beta- hemolitic grupa A.'],
        correctAnswer:[2,9]},
    {question: '349.Angina din scarlatina are urmatoarele caractere:',
        choices: [
            'a. rosie, cu false membrane aderente care se refac rapid, extensive la pilieri, lueta, sangerande;',
            'b. rosie sau eritemato-pultacee, rar ulcero-necrotica ;',
            'c. eritematoasa difuza.'],
        correctAnswer:[1,9]},
    {question: '350.In dianosticul scarlatinei de importanta majora este ciclul lingual cu urmatoarele caracteristici:',
        choices: [
            'a. limba saburala, smeurie, rosie inchis, lucioasa;',
            'b. limba smeurie, reliefare a papilelor fungiforme;',
            'c. limba saburala ce se descuameaza in sens antero-posterior .'],
        correctAnswer:[0,9]},
    {question: '351.Tratamentul simptomatic in scarlatina se adreseaza :',
        choices: [
            'a. febrei, cefaleeei si durerilor la deglutitie;',
            'b. febrei si catarului respirator ;',
            'c. febrei, poliadenopatiei occipitale'],
        correctAnswer:[0,9]},
    {question: '352.In scarlatina, testarea receptivitatii se face prin testul intradermic Dick, test de:',
        choices: [
            'a. imunitate;',
            'b. alergie ;',
            'c. nici una dintre afirmatii nu este corecta .'],
        correctAnswer:[0,9]},
    {question: '353.Complicatiile scarlatinei pot fi:',
        choices: [
            'a. toxice, septice, postinfectioase;',
            'b. suprainfectii bacteriene, crup, encefalita;',
            'c. poliartrite, efect teratogen.'],
        correctAnswer:[0,9]},
    {question: '354. In rujeola, perioada de incubatie dureaza :',
        choices: [
            'a. 3-6 zile;',
            'b. 8-11 zile;',
            'c. 14-21 zile'],
        correctAnswer:[1,9]},
    {question: '355.Eruptia maculopapuloasa in rujeola incepe la :',
        choices: [
            'a. fata - dupa urechi, pe frunte si obraji ;',
            'b. gat - torace;',
            'c. membre'],
        correctAnswer:[0,9]},
    {question: '356.Evolutia eruptiei in rujeola :',
        choices: [
            'a. da descuamatie furfuracee precoce, in lambouri tardive;',
            'b. nu lasa urme;',
            'c. da pigmentare cafenie si descuamatie foarte fina .'],
        correctAnswer:[2,9]},
    {question: '357.Cresterea febrei in perioada de stare si de palire a eruptiei :',
        choices: [
            'a. este normala;',
            'b. este semn de complicatie prin suprainfectie bacteriana;',
            'c. este lipsita de importanta .'],
        correctAnswer:[1,9]},
    {question: '358.Semnul Koplick, patognomonic in rujeola, dispare:',
        choices: [
            'a. in prima zi de eruptie ;',
            'b. in a treia zi dupa ce eruptia paleste;',
            'c. in perioada de convalescenta .'],
        correctAnswer:[0,9]},
    {question: '359.Importanta rubeolei este data de :',
        choices: [
            'a. efectul teratogen asupra sarcinii in primele 3-4 luni cu aparitia unor malformatii congenitale ;',
            'b. complicatiile toxice, septice postinfectioase ;',
            'c. evolutia asimptomatica .'],
        correctAnswer:[0,9]},
    {question: '360.Eruptia in rubeola are urmatoarele caracteristici :',
        choices: [
            'a. macule mici de culoare roz, fara tendinte la confluente;',
            'b. micropapuloasa, cu fond congestiv ;',
            'c. maculopapuloasa, cu tendinte la confluente .'],
        correctAnswer:[0,9]},
    {question: '361.Incubatia in rubeola dureaza :',
        choices: [
            'a. 2-3 saptamani;',
            'b. 1-2 saptamani;',
            'c. 1 saptamana .'],
        correctAnswer:[0,9]},
    {question: '362.Febra + catar respirator + adenopatie sunt simptome care sugereaza :',
        choices: [
            'a. rujeola;',
            'b. rubeola;',
            'c. scarlatina'],
        correctAnswer:[1,9]},
    {question: '363..Legislatia actuala prevede ca raportarea cazurilor de rubeola sa se efectueze:',
        choices: [
            'a. trimestrial, numeric;',
            'b. lunar, nominal ;',
            'c. in 24 ore de la depistare, nominal .'],
        correctAnswer:[0,9]},
    {question: '364. In perioada de stare, eruptia cu aspect polimorf: macule, papule, vezicule clare ori tulburi si cruste hematice apare in :',
        choices: [
            'a. scarlatina;',
            'b. rujeola;',
            'c. varicela.'],
        correctAnswer:[2,9]},
    {question: '365. Distributia centripetal a eruptiei (sunt mai multe elemente pe trunchi si radacina membrelor) apare in :',
        choices: [
            'a. varicela;',
            'b. rubeola;',
            'c. angina.'],
        correctAnswer:[0,9]},
    {question: '366. Eruptia este pruriginoasa in :',
        choices: [
            'a. scarlatina;',
            'b. rubeola;',
            'c. varicela.'],
        correctAnswer:[2,9]},
    {question: '367. Parotidita epidemica este cunoscuta si sub numele de :',
        choices: [
            'a. oreion;',
            'b. varsat;',
            'c. pojar.'],
        correctAnswer:[0,9]},
    {question: '368.Tabloul clinic cu debut relativ brusc, febra, cefalee si jena in lojile parotidiene apare in:',
        choices: [
            'a. spondiloza cervicala;',
            'b. parotidita epidemica;',
            'c. rubeola.'],
        correctAnswer:[1,9]},
    {question: '369.In tusea convulsiva, sursa de infectie este :',
        choices: [
            'a. omul bolnav cu forme tipice si atipice;',
            'b. animalele;',
            'c. purtatorii faringieni de streptococ .'],
        correctAnswer:[0,9]},
    {question: '370. Semnele catarale respiratorii : rinita, raguseala, tuse, injectie conjunctivala, aspect "facies plans", subfebrilitate, apar in :',
        choices: [
            'a. rujeola;',
            'b. tuse convulsiva;',
            'c. rubeola.'],
        correctAnswer:[1,9]},
    {question: '371. Primovaccinarea in poliomielita consta in doua administrari orale, la 2 luni interval, in lunile de :',
        choices: [
            'a. iarna-primavara;',
            'b. vara- toamna;',
            'c. toamna - iarna .'],
        correctAnswer:[0,9]},
    {question: '372. A treia vaccinare pentru poliomielita se face :',
        choices: [
            'a. in primul an de scoala;',
            'b. liceu;',
            'c. maturitate.'],
        correctAnswer:[0,9]},
    {question: '373.Meningita pneumococica detine prioritatea ca frecventa in etiologia meningitelor purulente la :',
        choices: [
            'a. copii;',
            'b. adulti peste 40 ani;',
            'c. nou-nascut si sugar .'],
        correctAnswer:[1,9]},
    {question: '374. Sindromul encefalitic - o inmanunchere de semne si simptome- care exprima afectarea creierului de cauza infectioasa si postinfectioasa, apare in :',
        choices: [
            'a. hepatita acuta virala;',
            'b. encefalita;',
            'c. toxiinfectie alimentara.'],
        correctAnswer:[1,9]},
    {question: '375. Tablou clinic cu varsaturi, colici abdominale, scaune diareice, defineste :',
        choices: [
            'a. hepatita acuta virala;',
            'b. toxiinfectia alimentara;',
            'c. scarlatina.'],
        correctAnswer:[1,9]},
    {question: '376. Tabloul clinic ce cuprinde scaune frecvente, moi, lichide, abundente, cu aspect omogen, de culoare galben verzui, apare in:',
        choices: [
            'a. holera;',
            'b. sallmoneloza;',
            'c. dizenterie.'],
        correctAnswer:[1,9]},
    {question: '377. Impiedicarea proliferarii agentului patogen existent in unele alimente se face prin pastrarea la temperatura de :',
        choices: [
            'a. -5grade C;',
            'b. 5grade C;',
            'c. -10 grade C.'],
        correctAnswer:[1,9]},
    {question: '378.Bacilul tific are patogenitate exclusiva pentru :',
        choices: [
            'a. animal;',
            'b. om;',
            'c. om si animal, in egala masura.'],
        correctAnswer:[1,9]},
    {question: '379. Febra tifoida se transmite pe cale :',
        choices: [
            'a. digestiva;',
            'b. aerogena;',
            'c. parenterala.'],
        correctAnswer:[0,9]},
    {question: '380. Scaunele diareice verzi ca in " zeama de mazare", omogene, apar in :',
        choices: [
            'a. sallmonela;',
            'b. febra tifoida;',
            'c. peritonita.'],
        correctAnswer:[1,9]},
    {question: '381. Scaune numeroase, mucopiosanguinolente, tenesme si uneori febra, stare toxica, subliniaza sindromul clinic din :',
        choices: [
            'a. tetanos;',
            'b. dizenterie;',
            'c. hepatita virala.'],
        correctAnswer:[1,9]},
    {question: '382. Calea de transmitere a dizenteriei este:',
        choices: [
            'a. aerogena;',
            'b. fecal-orala;',
            'c. parenterala.'],
        correctAnswer:[1,9]},
    {question: '383. Rol primar in transmiterea dizenteriei il au:',
        choices: [
            'a. contaminarea hainelor;',
            'b. mainile murdare;',
            'c. mustele.'],
        correctAnswer:[1,9]},
    {question: '384. Pentru bolnavii care lucreaza in sector alimentar, colectivitati de copii, este obligatoriu controlul, dupa tratament, prin recoltarea de :',
        choices: [
            'a. 1 coprocultura;',
            'b. 3 coproculturi;',
            'c. 5 coproculturi.'],
        correctAnswer:[1,9]},
    {question: '385.. Solul, praful, obiectele contaminate, mijlocesc patrunderea sporilor prin:',
        choices: [
            'a. leziuni ale tegumentelor;',
            'b. digestive;',
            'c. aerogen.'],
        correctAnswer:[0,9]},
    {question: '386. Morbiditatea prin tetanos a scazut foarte mult prin generalizarea vaccinarii cu:',
        choices: [
            'a. anatoxina tetanica;',
            'b. verorab;',
            'c. anatoxia difterica.'],
        correctAnswer:[0,9]},
    {question: '387. Debutul, de obicei lent, cu "trismus" precedat uneori de tresariri musculare la nivelul plagii este semn patognomonic pentru :',
        choices: [
            'a. scarlatina;',
            'b. tetanos;',
            'c. dizenterie.'],
        correctAnswer:[1,9]},
    {question: '388. "Rasul sardonic" apare in :',
        choices: [
            'a. scarlatina;',
            'b. rujeola;',
            'c. tetanos.'],
        correctAnswer:[2,9]},
    {question: '389.Stadiul compensat se caracterizeza prin:',
        choices: [
            'a. hipersplenism;',
            'b. hepatomegalie;',
            'c. simptomele nu sunt evidente;'],
        correctAnswer:[2,9]},
    {question: '390. Legaturile vasculare de varice esofagiene se fac:',
        choices: [
            'a. in scop profilactic;',
            'b. de necessitate;',
            'c. cand starea bolnavului nu permite interventii de amploare;'],
        correctAnswer:[2,9]},
    {question: '391. Sonda cu balon aplicata in scop hemostatic in cazul sangerarii varicelor esofagiene este:',
        choices: [
            'a. Foley;',
            'b. Blackmore;',
            'c. Sonda endotraheala;'],
        correctAnswer:[1,9]},
    {question: '392.Examenul radiologic intr-o entorsa este:',
        choices: [
            'a. obligatoriu',
            'b. nu este absolut necesar',
            'c. obligatoriu atunci cind banuim o leziune mai importanta'],
        correctAnswer:[2,9]},
    {question: '393.Leziunile capsulei articulare in cazul luxatiilor sunt:',
        choices: [
            'a. mai importante decit cele din entorse',
            'b. mai putin importante decit cele din entorse',
            'c. nu se produc leziuni articulare'],
        correctAnswer:[0,9]},
    {question: '394.Pentru a calma durerea extrem de vie in cazul unei luxatii:',
        choices: [
            'a. se administreaza analgetice majore',
            'b. se readuce cit mai urgent capetele articulatiei in pozitie normala',
            'c. se administreaza sedative'],
        correctAnswer:[1,9]},
    {question: '395.Aplicarea atelelor se va face astfel incit sa depaseasca intotdeauna:',
        choices: [
            'a. articulatia de deasupra zonei fracturate',
            'b. articulatia de dedesuptul zonei fracturate',
            'c. articulatia de deasupra si de dedesuptul zonei fracturate'],
        correctAnswer:[2,9]},
    {question: '396.Din urmatoarele leziuni traumatice osteo-articulare este mai grava:',
        choices: [
            'a. fractura in "lemn verde"',
            'b. luxatia deschisa a cotului',
            'c. fractura diafizei peroneului'],
        correctAnswer:[1,9]},
    {question: '397 In cursul unei luxatii urmatoarele simptome, dar si complicatiilepot avea urmari grave:',
        choices: [
            'a. hemartroze, hidrartroze',
            'b. compresiunile vasculare si nervoase',
            'c. deformarea regiunii si impotenta functionala'],
        correctAnswer:[1,9]},
    {question: '398.Cele mai frecvente recidive ale luxatiilor apar la:',
        choices: [
            'a. articulatia scapulo-humerala',
            'b. articulatia coxo-femurala',
            'c. articulatia cotului'],
        correctAnswer:[0,9]},
    {question: '399.Recunostem din fracturile de mai jos cele clasificate dupa mecanismul de producere:',
        choices: [
            'a. fracturi prin indoire si rasucire',
            'b. fracturi inchise si deschise',
            'c. fracturi complete si incomplete'],
        correctAnswer:[0,9]},
    {question: '400.Prin fractura deschisa se intelege:',
        choices: [
            'a. fractura acoperita de piele,dar cu leziuni masive a muschilor, tendoanelor si vaselor',
            'b. fractura care produce leziuni ale organelor viscerale',
            'c. fractura in care pielea a fost lezata si osul ajunge in contact cu exteriorul'],
        correctAnswer:[2,9]},
    {question: '401.Complicatiile de mai jos care sunt mai frecvente in fracturile deschise comparativ cu cele inchise sunt:',
        choices: [
            'a. embolii pulmonare si cerebrale',
            'b. socul traumatic si hemoragic',
            'c. procesele septice de osteita sau osteomielita'],
        correctAnswer:[2,9]},
    {question: '402.Din fracturile de mai jos sunt fracturi complete doar:',
        choices: [
            'a. factura in varf de clarinet',
            'b. factura in lemn verde',
            'c. fractura prin infundare'],
        correctAnswer:[0,9]},
    {question: '403.Fractura cominutiva reprezinta',
        choices: [
            'a. fractura mai multor oase ale aceluiasi membru',
            'b. fracturi multiple ale oaselor',
            'c. fractura cu mai multe fragmente ale aceluiasi os'],
        correctAnswer:[2,9]},
    {question: '404. Sunt semen sigure ale unei fracturi de os',
        choices: [
            'a. echimozele si hematomul',
            'b. durerea in punct fix, care se accentueaza cind miscam fragmentele osoase',
            'c. deformarea regiunii'],
        correctAnswer:[1,9]},
    {question: '405.In fracturile primelor patru coastepot aparea ca leziuni concomitente:',
        choices: [
            'a. leziuni pulmonare cu pneumotorax',
            'b. rupturi ale ficatului, rinichiului, splinei',
            'c. leziuni pulmonare cu hemotorax'],
        correctAnswer:[0,9]},
    {question: '406.Ccare din fracturile de mai jos este mai grava:',
        choices: [
            'a. fractura de col femural',
            'b. fractura deschisa in 1/3 medie a antebratului',
            'c. fractura oaselor gambei'],
        correctAnswer:[1,9]},
    {question: '407.in cazul unei fracturi fara deplasare, la spital se I-au urmatoarele masuri:',
        choices: [
            'a. se pune diagnostic clinic si radiologic',
            'b. se face anestezie generala',
            'c. se asigura reducerea fracturii'],
        correctAnswer:[0,9]},
    {question: '408..Aparatul gipsat trebuie sa cuprinda:',
        choices: [
            'a. numai focarul de fractura',
            'b. focarul de fractura si articulatia de dedesupt',
            'c. articulatia de deasupra si dedesuptul focarului de fractura'],
        correctAnswer:[2,9]},
    {question: '409.Din fracturile de mai jos nu se pot reduce corect pe cale ortopedica si este nevoie de reducere chirurgicala la:',
        choices: [
            'a. fractura de rotula',
            'b. fractura de humerus',
            'c. fractura de olecran'],
        correctAnswer:[2,9]},
    {question: '410.Urmatoarele plagi se datoreaza agentilor mecanici?',
        choices: [
            'a. plaga prin caldura, agenti ionizanti',
            'b. plaga prin intepare, taiere, prin muscatura',
            'c. plaga produsa de frig, acizi, raze gama'],
        correctAnswer:[1,9]},
    {question: '411.Prin plagi perforante intelegem:',
        choices: [
            'a. plagi ale tegumentelor',
            'b. plagi care patrund in cavitatile naturale',
            'c. plagi care patrund in cavitatile naturale si lezeaza unele organe din cavitatea respectiva'],
        correctAnswer:[2,9]},
    {question: '412. Prin plagi recente intelegem:',
        choices: [
            'a. plagi produse in ziua respectiva',
            'b. plagi produse sub 6-8 ore',
            'c. plagi produse in ultimele 48 ore'],
        correctAnswer:[1,9]},
    {question: '413. In cazul muscaturilor de sarpe si intepaturilor de insecte veninoase se practica urmatoarele manevre:',
        choices: [
            'a. incizia si excizia tesutului cutanat in zona lezata',
            'b. aplicarea garoului deasupra leziunii',
            'c. administrare de antivenin'],
        correctAnswer:[1,9]},
    {question: '414.Rabia se poate transmite prin:',
        choices: [
            'a. intepaturi ale unor inserte',
            'b. plagi muscate de animale',
            'c. inocularea veninului de sarpe'],
        correctAnswer:[1,9]},
    {question: '415.Alaturi de tratarea corecta a plagii se va aplica o imobilizare in aparat gipsat in urmatoarele situatii:',
        choices: [
            'a. plagi cu hemoragie mare',
            'b. plagi in care sunt intilnite mase mari vasculare si tendoane',
            'c. plagi cu leziuni osteo-articulare'],
        correctAnswer:[2,9]},
    {question: '416.Aplicarea unui pansament umed este indicata in:',
        choices: [
            'a. plagile recente',
            'b. plagile care secreta abundent',
            'c. tromboflebite'],
        correctAnswer:[2,9]},
    {question: '417.Pentru fixarea unui pansament la nivelul capului se poate folosi:',
        choices: [
            'a. fixare cu leucoplast',
            'b. fixare cu plasa autoadeziva',
            'c. fixare cu basma (capelina)'],
        correctAnswer:[2,9]},
    {question: '418.Atrofierea muschilor si scaderea tonusului in general poate aparea la bolnavii imobilizati datorita:',
        choices: [
            'a. pozitiei incorecte',
            'b. din cauza imobilizarii indelungate',
            'c. din cauza aplicarii unui tratament necorespunzator'],
        correctAnswer:[0,9]},
    {question: '419.Ventilatia dificila a plaminilor la bolnavul imobilizat timp indelungat poate produce:',
        choices: [
            'a. pneumonii hipostatice',
            'b. bronhopneumonii',
            'c. pleurezii'],
        correctAnswer:[0,9]},
    {question: '420.Bolnavii imobilizati la pat vor fi scosi la aer liber (terasa, balcon) cu ajutorul:',
        choices: [
            'a. patului, fara ca el sa fie mobilizat',
            'b. in carucioare rulante',
            'c. este contraindicata iesirea din salon'],
        correctAnswer:[0,9]},
    {question: '421.Pentru prevenirea escarelor la bolnavii imobilizati carora nu le este permisa mici o miscare se vor folosi:',
        choices: [
            'a. saltele pneumatice',
            'b. saltele pneumatice, compartimentate, antidecubit',
            'c. saltele din material plastic'],
        correctAnswer:[1,9]},
    {question: '422.Coma diabetica poate fi declansata de:',
        choices: [
            'a. efort fizic prelungit',
            'b. oprirea sau diminuarea nejustificata a tratamentului cu insulina',
            'c. consum de alcool'],
        correctAnswer:[1,9]},
    {question: '423.Semnele majore din coma diabetica sunt:',
        choices: [
            'a. respiratie Kussmaul, deshidratare globala, tulburari de cunostinta (coma calma)',
            'b. agitatie psihomotorie',
            'c. cefalee, diplopie, anxietate'],
        correctAnswer:[0,9]},
    {question: '424. Pacientul cu coma diabetica prezinta urmatoarele simptome:',
        choices: [
            'a. astenie, somnolenta - coma',
            'b. convulsii tonico-clonice',
            'c. pierderea monoculara sau binoculara a vederii'],
        correctAnswer:[0,9]},
    {question: '425. Primul gest terapeutic, atunci cind diferentierea dintre coma hipoglicemica si coma diabetica este greu de facut, consta in:',
        choices: [
            'a. administrarea de 20 - 30 ml glucoza hipertonica',
            'b. recoltarea probelor de laborator',
            'c. administrarea i.v. a 20 UI insulina rapida'],
        correctAnswer:[0,9]},
    {question: '426. Tulburarile electrolitice care se produc in coma diabetica sunt:',
        choices: [
            'a. cresterea ph-ului sanguin',
            'b. scaderea clorului sanguin',
            'c. scaderea potasiului, clorului si sodiului sanguine'],
        correctAnswer:[2,9]},
    {question: '427. Rehidratarea pacientului in coma diabetica va incepe cu administrarea de:',
        choices: [
            'a. Manitol 20% in perfuzie lenta (30 - 60 min)',
            'b. ser fiziologic - 1000 ml in primele 20 de minute',
            'c. ser glucozat 5%'],
        correctAnswer:[1,9]},
    {question: '428. In coma diabetica se pot administra solutii hipertonice de glucoza 20% tamponata cu insulina atunci cind:',
        choices: [
            'a. apar primele semne de constiinta',
            'b. se inregistreaza cresterea rezervei alcaline',
            'c. glicemia a scazut sub 300 mg%'],
        correctAnswer:[2,9]},
    {question: '429. Insulina trebuie pastrata:',
        choices: [
            'a. la temperatura camerei',
            'b. in frigider la temperatura de +2 - +7',
            'c. ambele variante sunt corecte'],
        correctAnswer:[1,9]},
    {question: '430. Manifestarile respiratorii care apar in socul anafilactic sunt:',
        choices: [
            'a. polipnee cu expiratie prelungita si tiraj',
            'b. respiratie Cheyne-Stockes',
            'c. crize de dispnee cu respiratie suieratoare, provocata de bronhoconstrictie'],
        correctAnswer:[2,9]},
    {question: '431. Combaterea durerii in soc se face cu:',
        choices: [
            'a. medicamente indicate de medic',
            'b. xilina 0,5 - 1%',
            'c. mialgin'],
        correctAnswer:[0,9]},
    {question: '432. In cadrul socului se descriu urmatoarele stadii:',
        choices: [
            'a. soc compensat, soc decompensat, coma',
            'b. soc compensat, soc ireversibil',
            'c. soc decompensat, coma'],
        correctAnswer:[0,9]},
    {question: '433. Diabetul zaharat se caracterizeaza prin:',
        choices: [
            'a. perturbarea metabolismului glucidic',
            'b. cresterea nivelului glicemiei postprandiale',
            'c. perturbarea metabolismului mineral'],
        correctAnswer:[0,9]},
    {question: '434. Proba hiperglicemiei provocate se face prin:',
        choices: [
            'a. administrarea orala a 450 g glucoza/1 m 2 suprafata corporala dizolvata in 300 ml apa',
            'b. administrarea orala de 100 g glucoza pulbere dizolvata in 300 ml apa',
            'c. administrarea i.v. de glucoza 33%'],
        correctAnswer:[0,9]},
    {question: '435. Cauza asa-numitei "singerari in propriile tesuturi" in cadrul socului traumatic este:',
        choices: [
            'a. vasodilatatia la locul de actiune a agentului traumatic',
            'b. vasodilatatia masiva la locul actiunii agentului traumatic dar si la distanta',
            'c. hemoragia intratisulara'],
        correctAnswer:[0,9]},
    {question: '436. Socul hemoragic apare dupa hemoragii acute cind pierderile depasesc:',
        choices: [
            'a. 20% din masa circulanta',
            'b. 30% din masa circulanta',
            'c. orice hemoragie e susceptibila de a produce soc hemoragic'],
        correctAnswer:[1,9]},
    {question: '437. Injectia cu adrenalina sau simpaticomimetice in stadiul de soc compensat poate avea urmatoarele efecte:',
        choices: [
            'a. ridica tonusul bolnavului',
            'b. agraveaza anoxia tisulara si grabesc decompensarea',
            'c. favorizeaza iesirea bolnavului din starea de soc'],
        correctAnswer:[1,9]},
    {question: '438. Diabetul zaharat este o boala de metabolism cu evolutie cronica si se datoreaza:',
        choices: [
            'a. distrugerii pancreasului',
            'b. insuficientei relative de insulina',
            'c. insuficientei absolute sau relative de insulina in organism'],
        correctAnswer:[2,9]},
    {question: '439.Criteriile pentru diagnosticul de pneumonie, ca infectie nozocomiala, includ:',
        choices: [
            'a. examen de sputa;',
            'b. examen radiologic;',
            'c. combinatii diferite ale unor dovezi clinice, radiologice si de laborator .'],
        correctAnswer:[2,9]},
    {question: '440. Scopul aplicarii Precautiunilor Universale este de a :',
        choices: [
            'a. preveni transmiterea infectiilor pe cale sanguina personalului , la locul de munca;',
            'b. preveni transmiterea infectiilor nozocomiale ;',
            'c. preveni transmiteriea infectiilor, pe cale aerogena, in unitatile sanitare cu paturi .'],
        correctAnswer:[0,9]},
    {question: '441.Manifstarea clinica caracteristica litiazei renale este:',
        choices: [
            'a. infectia urinara;',
            'b. insuficienta renala;',
            'c. colica renala.'],
        correctAnswer:[2,9]},
    {question: '442. Sediul durerii in colica renala se afla in:',
        choices: [
            'a. regiunea lombara;',
            'b. regiunea toracala;',
            'c. regiunea suprapubiana.'],
        correctAnswer:[0,9]},
    {question: '443. Durerea lombara cu iradiere in organele genitale externe este caracteristica:',
        choices: [
            'a. insuficientei renale acute ;',
            'b. insuficientei renale cronice;',
            'c. colicii renale.'],
        correctAnswer:[2,9]},
    {question: '444. Uremia este stadiul terminal al :',
        choices: [
            'a. insuficientei renale cronice ;',
            'b. pielonefritei cronice ;',
            'c. pielonefritei acute.'],
        correctAnswer:[0,9]},
    {question: '445. .In faza de izostenurie, densitatea urinei oscileaza intre :',
        choices: [
            'a. 1017-1020 ;',
            'b. 1015-1017 ;',
            'c. 1010-1011.'],
        correctAnswer:[2,9]},
    {question: '446. Cel mai important semn in insuficienta renala cronica este :',
        choices: [
            'a. nicturia ;',
            'b. disuria ;',
            'c. poliuria.'],
        correctAnswer:[2,9]},
    {question: '447. In insuficienta renala acuta, diureticele se vor administra:',
        choices: [
            'a. dupa corectarea volemiei;',
            'b. inainte de corectarea volemiei;',
            'c. dupa administrarea de vasodilatatoare.'],
        correctAnswer:[0,9]},
    {question: '448. Compresiunea din masajul cardiac extern se face:',
        choices: [
            'a. pe 1/3 inferioara a sternului;',
            'b. spre apendicele xifoid;',
            'c. pe coaste, in stanga sternului'],
        correctAnswer:[0,9]},
    {question: '449.Asistentul medical:',
        choices: [
            'a. nu poate exercita nici o alta activitate',
            'b. poate exercita o alta activitate cu conditia ca aceasta sa fie compatibila cu demnitatea profesionala',
            'c. poate participa la actiuni de reclama si publicitate'],
        correctAnswer:[1,9]},
    {question: '450.Informatiile obtinute referitoare la pacienti pot fi impartasite:',
        choices: [
            'a. echipei medicale',
            'b. familiei',
            'c. publicatiilor stiintifice'],
        correctAnswer:[0,9]},
    {question: '451.Asistentul medical are obligatia:',
        choices: [
            'a. de a lua masuri de acordare a primului ajutor medical doar daca este prezent si medicul',
            'b. sa transporte pacientul la unitatea spitaliceasca',
            'c. de a lua masuri de acordare a primului ajutor medical, indiferent de persoana, locul sau situatia in care se gaseste'],
        correctAnswer:[0,9]},
    {question: '452.Asistentul medical trebuie sa trateze cu responsabilitate si profesionalism:',
        choices: [
            'a. pacientii mai tineri',
            'b. toti pacientii, indiferent de virsta, conditie sociala sau economica',
            'c. pacientii imobilizati la pat'],
        correctAnswer:[2,9]},
    {question: '453.Asistentul medical:',
        choices: [
            'a. nu este prestator de servicii',
            'b. este prestator de servicii',
            'c. poate propune in situatii speciale pacientilor folosirea unor remedii, proceduri insuficient validate pa plan stiintific sau medical'],
        correctAnswer:[1,9]},
    {question: '454.Protectia asistentului medical pentru riscurile ce decurg din practica profesionala se realizeza de catre:',
        choices: [
            'a. fiecare asistent medical prin societatile de asigurari',
            'b. angajator, prin societatile de asigurari',
            'c. nu este necesara protectiaasistentului medical'],
        correctAnswer:[1,9]},
    {question: '455.Angajarea si promovarea profesionala a asistentului medical in sistemul sanitar public se realizeaza:',
        choices: [
            'a. dupa absolvirea scolii postliceale sanitare',
            'b. dupa obtinerea Autorizatiei de libera practica',
            'c. prin concurs, potrivir legii'],
        correctAnswer:[2,9]},
    {question: '456.Alegerile pentru organele de conducere ale Ordinului Asistentilor Medicali din Rominia, la nivel natioanal, judetean, al municipiului Bucuresti se organizeaza:',
        choices: [
            'a. o data la 2 ani',
            'b. o data la 3 ani',
            'c. o data la 4 ani'],
        correctAnswer:[2,9]},
    {question: '457.Adunarea generala a Ordinului Asistentilor Medicali din Rominia se intruneste:',
        choices: [
            'a. anual',
            'b. de doua ori pe an',
            'c. ori de cite ori este nevoie'],
        correctAnswer:[0,9]},
    {question: '458.Biroul Executiv al Ordinului Asistentilor Medicali din Rominia este alcatuit din:',
        choices: [
            'a. presedinte, 3 vicepresedinti, un secretar',
            'b. presedinte, 2 vicepresedinti, un secretar',
            'c. presedinte, 4 vicepresedinti, un secretar'],
        correctAnswer:[0,9]},
    {question: '459. Care din agentii patogeni (bacterii, virusuri, protozoare, fungi) pot produce infectii nosocomiale?',
        choices: [
            'a. nici unul;',
            'b. toti;',
            'c. numai bacteriile.'],
        correctAnswer:[1,9]},
    {question: '460.Daunele provocate pacientului prin nerespectarea prevederilor Or.MSF.984/1994 implica dupa sine responsabilitatea:',
        choices: [
            'a. institutiei;',
            'b. individuala;',
            'c.individuala sau dupa caz a institutiei;'],
        correctAnswer:[2,9]},
    {question: '461. Tratamentul bolnavilor cu colica biliara consta in administrarea de:',
        choices: [
            'a. metaclopramid, hemisuccinat de hidrocortizon',
            'b. antibiotice, sedative',
            'c. corectarea tulbularilor hidroelectrolitice'],
        correctAnswer:[1,2]},
    {question: '462. Sangerarea intermenstruala de origine uterina se numeste:',
        choices: [
            'a. menoragie',
            'b. melena',
            'c. metroragie.'],
        correctAnswer:[0,2]},
    {question: '463. In colecistita acuta apare urmatorul tablou clinic:',
        choices: [
            'a. durere in hipocondrul drept',
            'b. febra',
            'c. scaderea in greutate.'],
        correctAnswer:[0,1]},
    {question: '464. In cazul unui pacient cu colica biliara cu varsaturi incoercibile, acestea pot fi combatute prin administrare de:',
        choices: [
            'a. plegomazin fiole',
            'b. torecan tablete',
            'c. emetiral supozitoare.'],
        correctAnswer:[0,2]},
    {question: '465. Un pacient cu hemoragie prezinta:',
        choices: [
            'a. tahicardie',
            'b. tahipnee',
            'c. cresterea cantitatii de CO2 in sange.'],
        correctAnswer:[1,2]},
    {question: '466. Abcesul sufrenic poate evolua spre:',
        choices: [
            'a. resorbtie cu procese aderentiale',
            'b. ocluzie intestinala',
            'c. se poate rupe si provoaca o peritonita generalizata.'],
        correctAnswer:[0,2]},
    {question: '467. Nu se pot administra in ulcerul perforat:',
        choices: [
            'a. purgative',
            'b. morfina',
            'c. antialgice.'],
        correctAnswer:[0,1]},
    {question: '468. Este contraindicata efectuarea examenului radiologic cu sulfat de bariu in:',
        choices: [
            'a. gastrita cronica',
            'b. ulcerul gastric perforat',
            'c. hemoragie digestiva.'],
        correctAnswer:[1,2]},
    {question: '469. Urmatoarele manifestari pot reprezenta semne de perforatie acoperita:',
        choices: [
            'a. debut violent',
            'b. contractura abdominala',
            'c. meteorism intestinal.'],
        correctAnswer:[0,1]},
    {question: '470. In colica biliara conduita de urgenta consta in:',
        choices: [
            'a. repaus la pat, antispastice, corectarea echlibrului hidro-electrolitic',
            'b. regim alimentar, calmarea durerii, combaterea varsaturilor',
            'c. repaus digestiv, administrare de antibiotice, calmarea durerii cu morfina'],
        correctAnswer:[0,1]},
    {question: '471. Pentru un accidentat cu hemoragiese vor lua urmatoarele masuri de urgenta:',
        choices: [
            'a. refacerea masei circulante',
            'b. monitorizarea functiilor vitale',
            'c. examinarea morfo-functionala a rinichiului.'],
        correctAnswer:[0,1]},
    {question: '472. Urmatoarele simptome sunt caracteristice ulcerului gastric perforat:',
        choices: [
            'a. transpiratii reci, facies anxios, puls rapid',
            'b. senzatia de sete accentuata, hipertensiune',
            'c. dureri puternice in epigastru, contractura abdominala.'],
        correctAnswer:[0,2]},
    {question: '473. Hemoragiile digestive superioare sunt hemoragiile ce provin din:',
        choices: [
            'a. treimea distala a colonului',
            'b. treimea distala a esofagului',
            'c. stomac.'],
        correctAnswer:[1,2]},
    {question: '474. Tabloul clinic in hemoragia digestiva superioara se caracterizeaza prin:',
        choices: [
            'a. hematemeza',
            'b. rectoragie',
            'c. melena'],
        correctAnswer:[0,2]},
    {question: '475. In segmentul de de sub garou se produce:',
        choices: [
            'a. navalirea sangelui central in zona de desubtul garoului la scoaterea acestuia, cu scaderea brusca a tensiunii arteriale',
            'b. lezarea vaselor compresate',
            'c. dilatarea paralitica.'],
        correctAnswer:[0,2]},
    {question: '476. Sangele din hemoragia digestiva are culoarea:',
        choices: [
            'a. rosu inchis cu resturi alimentare',
            'b. zatului de cafea digerat',
            'c. rosu aprins, aerat.'],
        correctAnswer:[0,1]},
    {question: '477. Un garou aplicat in cazul unei hemoragii arteriale poate produce:',
        choices: [
            'a. soc de garou',
            'b. gangrena membrului',
            'c. lezarea vaselor compresate.'],
        correctAnswer:[0,2]},
    {question: '478. Hemoragia digestiva se manifesta prin:',
        choices: [
            'a. hematemeza',
            'b. melena',
            'c. hemoptizie'],
        correctAnswer:[0,1]},
    {question: '479. In cazul ulcerului gastro-duodenal pot aparea urmatoarele complicatii:',
        choices: [
            'a. perforatia',
            'b. stenoza',
            'c. sindromul Zollinger-Ellison.'],
        correctAnswer:[0,1]},
    {question: '480. Diagnosticul diferential in cazul ulcerului gastroduodenal se face cu urmatoarele afectiuni:',
        choices: [
            'a. cancerul gastric, colecistita cronica',
            'b. gastrita cronica, sindromul Zollinger-Ellison',
            'c. hemoragii digestive superioare.'],
        correctAnswer:[0,1]},
    {question: '481. Ulcerul gastroduodenal poate fi:',
        choices: [
            'a. cronic',
            'b. acut',
            'c. nu are importanta'],
        correctAnswer:[0,1]},
    {question: '482. Durerea in ulcerul gastro-duodenal are urmatoarele caracteristici:',
        choices: [
            'a. este localizata in epigastru cu iradiere spre rebordul costal',
            'b. are periodicitate, apare inainte de masa, in faza de inceput a ulcerului',
            'c. apare la 2-4 ore dupa masa.'],
        correctAnswer:[0,2]},
    {question: '483. In colicistita acuta se pot administra:',
        choices: [
            'a. antispastice si morfina',
            'b. antialgice si antibiotice',
            'c. antispastice, antibiotice si mialgin.'],
        correctAnswer:[1,2]},
    {question: '484. Aglutinele anti-RH:',
        choices: [
            'a. exista in mod normal la persoanele cu RH pozitiv',
            'b. nu exista la cei cu RH negativ',
            'c. exista si la cei cu RH negativ si RH pozitiv.'],
        correctAnswer:[0,1]},
    {question: '485. Un accidentat care are grupa AB(IV) RH pozitiv poate primi sangei:',
        choices: [
            'a. AB(IV) RH pozitiv',
            'b. B(III) RH negativ',
            'c. 0(I) RH pozitiv.'],
        correctAnswer:[0,2]},
    {question: '486. Tulburarile care apar in cazul unei hemoragii mari pot fi:',
        choices: [
            'a. cresterea tensiunii arteriale, scaderea pulsului',
            'b. diminuarea intr-un timp scurt a cantitatii de sange',
            'c. socul hemoragic.'],
        correctAnswer:[1,2]},
    {question: '487. Factorii care pot altera sangele conservat sunt:',
        choices: [
            'a. temperatura de plus 4 grade - plus 8 grade Celsius',
            'b. temperatura peste 8 grade Celsius',
            'c. transportul necorespunzator al sangelui.'],
        correctAnswer:[1,2]},
    {question: '488. Proba Jeanbrau arata ca sangele donatorului nu este compatibil cu sangele primitorului:',
        choices: [
            'a. daca se constata o aglutinare oricat de mica',
            'b. daca se constata o omogenitate perfecta',
            'c. daca se constata aparitia de mici grunji.'],
        correctAnswer:[0,2]},
    {question: '489. Cand am primit de la Centrul de Transfuzii sangele izogrup si RH cu cel al primitorului trebuie sa :',
        choices: [
            'a. controlam intergritatea flaconului si sa facem transfuzia',
            'b. efectuam proba de compatibilitate Jeanbrau',
            'c. verificam grupa de sange si RH-ul flaconului de sange.'],
        correctAnswer:[1,2]},
    {question: '490. La o punga de sange bun de transfuzat, zonele prezente sunt :',
        choices: [
            'a. o zona galben-citrin clara',
            'b. o zona mijlocie de culoare albicioasa',
            'c. o zona de aspect laptos.'],
        correctAnswer:[0,1]},
    {question: '491. Etapele efectuarii unei transfuzii sunt:',
        choices: [
            'a. determinarea grupei sanguine si a RH-ului primitorului',
            'b. verificarea flaconului si a valabilitatii sangelui',
            'c. nu sunt necesare aceste etape.'],
        correctAnswer:[0,1]},
    {question: '492.Aspectul sangelui din flacon in cazul in care este infectat arata :',
        choices: [
            'a. plasma are culoare rosiatica',
            'b. aparitia de cheaguri si grunji',
            'c. plasma are aspect laptos, flocoane mari de fibrina.'],
        correctAnswer:[1,2]},
    {question: '493. Avantajele transfuziei indirecte sunt:',
        choices: [
            'a. poate fi realizata in autosanitara pe timpul transportului',
            'b. donatorii pot fi controlati',
            'c. prin conservare sangele isi pierde proprietatile initiale.'],
        correctAnswer:[0,1]},
    {question: '494. Urmatoarele motive pot constitui cauze pentru ca transfuzia sa nu se desfasoare normal:',
        choices: [
            'a. lipirea peretelui venei pe bizoul acului',
            'b. spasmul venos care poate sa apara in timpul socului',
            'c. sangele conservat tinut la temperaturi intre 4 - 8 grade Celsius.'],
        correctAnswer:[0,1]},
    {question: '495. Pot constitui cauze pentru ca transfuzia sa nu se desfasoare normal:',
        choices: [
            'a. un obstacol pe vena in segmentul superior fata de locul punctiei',
            'b. cand transfuzam cantitati mici de sange 0(I) unui primitor din alta grupa',
            'c. presiunea venoasa marita.'],
        correctAnswer:[0,2]},
    {question: '496. La transfuzarea plasmei lichide nu sunt necesare urmatoarele etape:',
        choices: [
            'a. determinarea grupei',
            'b. proba de compatibilitate pe lama',
            'c. proba de compatibilitate Oehlecker.'],
        correctAnswer:[0,1]},
    {question: '497. Tratamentul chirurgical este indicat in urmatoarele situatii:',
        choices: [
            'a. calcul coledocian',
            'b. hidrops vezicular',
            'c. complicatii cu infectie (colicistita acuta, piocolicistita).'],
        correctAnswer:[0,2]},
    {question: '498. Complicatiile cele mai frecvente intalnite in litiaza biliara sunt:',
        choices: [
            'a. angiocolita acuta',
            'b. pancreatita acuta',
            'c. infarctul de mezenter.'],
        correctAnswer:[0,1]},
    {question: '499. Profilaxia litiazei biliare presupune:',
        choices: [
            'a. tratarea corecta a bolilor de nutritie',
            'b. tratarea corecta a infectiilor biliare si intestinale',
            'c. tratarea corecta a afectiunilor de la nivelul pilorului si a inflamatiilor piloro- duonale.'],
        correctAnswer:[0,1]},
    {question: '500. Melena este un scaun cu sange:',
        choices: [
            'a. rosu-aprins',
            'b. negru ca pacura',
            'c. urat mirositor.'],
        correctAnswer:[1,2]},
    {question: '501. Semnele indirecte in cazul ulcerului gastro-duodenal sunt:',
        choices: [
            'a. convergenta pliurilor pana in apropierea nisei',
            'b. nisa neregulata cu baza nodulara',
            'c. retractia curburii mici.'],
        correctAnswer:[0,2]},
    {question: '502. Tratamentul chirurgical este recomandat in urmatoarele situatii:',
        choices: [
            'a. ulcerul perforat',
            'b. stenoza functionala',
            'c. hemoragii repetate.'],
        correctAnswer:[0,2]},
    {question: '503. Factorii ce pot interveni in aparitia litiazei biliare sunt:',
        choices: [
            'a. endocrini',
            'b. de teren',
            'c. de mediu.'],
        correctAnswer:[0,1]},
    {question: '504. Dereglarea metabolismului hepatic poate determina:',
        choices: [
            'a. scaderea raportului saruri biliare/ colesterol',
            'b. modificarea compozitiei chimice si PH-ului bilei infectate',
            'c. modificarea concentratiei de saruri biliare si fosfo-lipide.'],
        correctAnswer:[0,2]},
    {question: '505. Diagnosticul diferential in litiaza biliara poate fi facut cu:',
        choices: [
            'a. ulcerul gatro-duodenal',
            'b. angiocolita acuta',
            'c. dischineziile biliare.'],
        correctAnswer:[0,2]},
    {question: '506. Diagnosticul diferential in calculoza coledociana prezentand icter va fi facut cu:',
        choices: [
            'a. cancerul cailor biliare',
            'b. oditele stenozante',
            'c. pancreatita acuta hemoragica.'],
        correctAnswer:[0,1]},
    {question: '507. Diagnosticul diferential in colica biliara va fi facut cu:',
        choices: [
            'a. ulcerul gastro-duodenal perforat',
            'b. infarctul mezenteric',
            'c. oditele stenozante.'],
        correctAnswer:[0,1]},
    {question: '508. Transfuzia cu masa eritrocitara este indicata in cazul urmatoarelor afectiuni:',
        choices: [
            'a. anemiile uremicilor, arsilor',
            'b. anemii post infectioase',
            'c. anemiile din aplazii medulare'],
        correctAnswer:[0,1]},
    {question: '509. Transfuzia cu plasma este indicata in urmatoarele afectiuni:',
        choices: [
            'a. ocluzii intestinale, peritonita, pleurizii',
            'b. soc post operator, soc traumatic',
            'c. anemiile din aplaziile medulare.'],
        correctAnswer:[0,1]},
    {question: '510. Albumina umana este indicata in:',
        choices: [
            'a. soc prin arsuri',
            'b. bolnavi cirotici',
            'c. bolnavi neoplazici,'],
        correctAnswer:[0,2]},
    {question: '511. Masa trombocitara va fi folosita in:',
        choices: [
            'a. trombocitopenii cu fenomene hemoragice',
            'b. aplazii medulare, boli infectioase',
            'c. soc post operator, soc traumatic.'],
        correctAnswer:[0,1]},
    {question: '512. Transfuzia de sange este contraindicata in urmatoarele afectiuni:',
        choices: [
            'a. emfizem pulmonar, insuficienta hepato-renala',
            'b. leucemii acute si cronice',
            'c. tromboze venoase, hipertensivi.'],
        correctAnswer:[0,2]},
    {question: '513. Pot fi considerate accidente grave ale unei transfuzii:',
        choices: [
            'a. socul hemolitic, transmiterea unei boli infectioase',
            'b. hematuria masiva, icterul postransfuzional',
            'c. febra, cefaleea, urticaria.'],
        correctAnswer:[0,1]},
    {question: '514. Frisonul din timpul transfuziei sau posttransfuzional poate fi dat de:',
        choices: [
            'a. transfuzia cu sange incompatibil din sistemul 0AB si RH',
            'b. transfuzia cu sange infectat',
            'c. administrarea de sange care contine alergeni.'],
        correctAnswer:[0,1]},
    {question: '515. Accidentele datorate unor greseli tehnice de administrare a sangelui sunt :',
        choices: [
            'a. embolia gazoasa si dilatatia acuta a inimii',
            'b. edemul pulmonar acut prin administrarea unei cantitati mari de sange',
            'c. socul hemolitic posttransfuzional.'],
        correctAnswer:[0,1]},
    {question: '516. Tabloul clinic in embolia gazoasa prezinta :',
        choices: [
            'a. dureri toracice puternice cu respiratie ingreunata',
            'b. cianoza, agitatie, puls rapid, hipotensiune',
            'c. paloare, hipertensiune arteriala.'],
        correctAnswer:[0,1]},
    {question: '517. Corpii straini exogeni ai conductului auditiv extern pot fi:',
        choices: [
            'a. corpi straini neanimati (inerti);',
            'b. corpi straini endogeni;',
            'c. corpi straini animati (vii).'],
        correctAnswer:[0,2]},
    {question: '518. In caz de leziune a conductului auditiv sunt prezente urmatoarele simpotme:',
        choices: [
            'a. excoriatii sau plagi ale conductului ;',
            'b. tumefiere, tegument infiltrat, otalgie ;',
            'c. senzatii de infundare a urechii.'],
        correctAnswer:[0,1]},
    {question: '519. Corpul strain viu prezent in coductul auditiv poate fi transformat intr-unul inert prin:',
        choices: [
            'a. instilare de ulei de parafina sau glicerina in conduct;',
            'b. spalatura cu ajutorul unei seringi Guyon folosind apa incalzita la 37i C;',
            'c. aplicare in fata conductului a unui tampon imbibat in eter mentinut timp de 3- 10 minute.'],
        correctAnswer:[0,2]},
    {question: '520. Prezenta unui corp strain la nivelul nasului in cazuri mai vechi determina aparitia urmatoarelor simptome:',
        choices: [
            'a. eczema si ragade perinariene;',
            'b. rinoree mucopurulenta, secretie sanghinolenta;',
            'c. hidroree, stranut, lacrimare.'],
        correctAnswer:[0,1]},
    {question: '521. Localizarea corpilor straini in laringe determina urmatoarele simptome:',
        choices: [
            'a. dispnee, tiraj, cornaj;',
            'b. cianoza, agitatie, tuse spasmodica;',
            'c. disfagie, durere la deglutitie.'],
        correctAnswer:[0,1]},
    {question: '522. Extragerea corpilor straini implantati in cornee se face astfel:',
        choices: [
            'a. cu ajutorul acelor de corpi straini ;',
            'b. cu ajutorul acelor de siringa sterila numai de catre medicul oftalmolog;',
            'c. prin spalare abundenta a sacului conjunctival cu o solutie dezinfectanta.'],
        correctAnswer:[0,1]},
    {question: '523. Dupa extractia corpului strain corneean se recomanda:',
        choices: [
            'a. pansarea ochiului;',
            'b. se instileaza epitelizante si dezinfectante;',
            'c. se administreaza pe cale generala antiinflamatorii pe baza de cortizon.'],
        correctAnswer:[0,1]},
    {question: '524. Bolanavii cu infarct miocardic de obicei :',
        choices: [
            'a. sunt sedentari, obezi, mari fumatori, suprasolicitati psihic ;',
            'b. nu au in antecedentele personale sau familiale accidente vasculare cerebrale, cardiopatii ischemice sau arterite ale arterelor pelvine ;',
            'c. prezinta hipercolesterolemie, diabet sau hipertensiune arteriala.'],
        correctAnswer:[0,2]},
    {question: '525. Infarctul miocardic :',
        choices: [
            'a. poate aparea si la persoane fara antecedente coronariene',
            'b. in special apare la barbati trecuti de 40 de ani.',
            'c. apare in general la barbatii trecuti de 40 de ani, cu istorie de angina pectorala in ultimele luni sau ani.'],
        correctAnswer:[0,2]},
    {question: '526. In infarcul miocardic perioada prodromala:',
        choices: [
            'a. preceda uneori,cu cateva ore instalarea infarctului;',
            'b. se caracterizeaza prin accentuarea intensitatii duratei si frecventei acceselor dureroase la un vechi anginos.',
            'c. cele mai multe ori lipseste, debutul fiind brusc, brutal, adeseori in repaus'],
        correctAnswer:[1,2]},
    {question: '527. Perioada prodramala din infarctul miocardic, apare :',
        choices: [
            'a. rareori dupa efort, o emotie puternica ;',
            'b. intotdeauna dupa o masa copioasa ;',
            'c. rareori dupa o hemoragie severa, o tahicardie paroxistica.'],
        correctAnswer:[0,2]},
    {question: '528. Semenele clinice esentiale in perioada de debut a infarctului miocardic sunt:',
        choices: [
            'a. hipertensiunea;',
            'b. febra;',
            'c. durerea si hipotensiunea'],
        correctAnswer:[1,2]},
    {question: '529. Perioada de debut in infarcul miocardic:',
        choices: [
            'a. este cea mai critica;',
            'b. apare dupa efort ;',
            'c. dureaza 3-5 zile.'],
        correctAnswer:[0,2]},
    {question: '530. Durerea in infarctul miocardic :',
        choices: [
            'a. are sediul si iradierea similare durerii anginoase;',
            'b. este de intensitate neobisnuit de mare ;',
            'c. dureaza mai multe saptamani chiar luni.'],
        correctAnswer:[0,1]},
    {question: '531. Examenul electrocardiografic este obligatoriu in infarctul miocardic pentru :',
        choices: [
            'a. evidentierea unor zgomote cardiace ;',
            'b. confirmarea diagnosticului ;',
            'c. precizarea fazei evolutive si a localizarii.'],
        correctAnswer:[0,2]},
    {question: '532. Examenul de laborator in infarctul miocardic arata:',
        choices: [
            'a. accelerarea vitezei de sedimentare a hematiilor;',
            'b. leucocitoza;',
            'c. scaderea fibrinogenului.'],
        correctAnswer:[1,2]},
    {question: '533. Durerea in infarctul miocardic :',
        choices: [
            'a. se calmeaza prin repaus ;',
            'b. se calmeaza prin administrare de nitrati ;',
            'c. cedeaza la opiacee.'],
        correctAnswer:[0,1]},
    {question: '534. Perioada de stare in infarctul miocardic se caracterizeaza prin :',
        choices: [
            'a. disparitia febrei, asteniei, normalizarea TA ;',
            'b. aparitia durerii moderate precordiale;',
            'c. o durata de 4 - 5 saptamani .'],
        correctAnswer:[0,2]},
    {question: '535. Convalescenta in infarctul miocardic se caracterizeaza:',
        choices: [
            'a. anatomic prin formarea unei cicatrice membranoase;',
            'b. clinic prin restabilizarea lenta a capacitatii de munca;',
            'c. anatomic prin formarea unei cicatrice fibroase;'],
        correctAnswer:[1,2]},
    {question: '536. Durerea din infarctul miocardic:',
        choices: [
            'a. dureaza mai multe ore si uneori chiar zile ;',
            'b. dureaza 10 - 20 minute.',
            'c. se insoteste de o stare de mare anxietate, agitatie, zbucium si senzatie de moarte iminenta.'],
        correctAnswer:[0,2]},
    {question: '537. Angorul pectoral se caraceterizeaza prin :',
        choices: [
            'a. crize dureroase cu iradiere pana la ultimele doua degete ;',
            'b. crize dureroase paraxistice cu iradiere in cazurile tipice in umarul stang., bratul si antebratul stang;',
            'c. crize dureroase paroxistice, localizate de cele mai multe ori inapoia sternului.'],
        correctAnswer:[1,2]},
    {question: '538. Cauzele determinante ale angorului pectoral sunt :',
        choices: [
            'a. arteroscleroza coronariana',
            'b. coronarita reumatismala, trombangeita obliteranta;',
            'c. stenoza aortica, stenoza mitrala.'],
        correctAnswer:[0,2]},
    {question: '539. In angorul pectoral bolnavul indica sediul durerii toracice :',
        choices: [
            'a. cu intreaga palma sau cu ambele palme ;',
            'b. cu un singur deget ;',
            'c. in plin stern (semnul i pumnului srans i).'],
        correctAnswer:[0,2]},
    {question: '540. Durerea in angorul pectoral :',
        choices: [
            'a. apare in timpul efortului ;',
            'b. da senzatia de constrictie ;',
            'c. poate lua aspectul de arsura, de presiune.'],
        correctAnswer:[1,2]},
    {question: '541. Iradierile atipice in angorul pectoral sunt:',
        choices: [
            'a. in maxilarul inferior, spre umarul drept, regiunea interscapulara, hipocondrul drept;',
            'b. in umarul stang si de-a lungul membrului superior stang pe margienea cubitala ;',
            'c. la baza gatului .'],
        correctAnswer:[0,2]},
    {question: '542. Durata durerii in angorul pectoral este :',
        choices: [
            'a. 2-3 minute',
            'b. mai rar pana la 10 -15 minute ;',
            'c. mai mult de 30 de minute.'],
        correctAnswer:[0,1]},
    {question: '543. Testul patognomonic in angina pectorala :',
        choices: [
            'a. se caracterizeaza prin ineficienta terapeutica a Nitroglicerinei ;',
            'b. constituie un test clinic de diferentiere fata de infarct si sindromul intermediar ;',
            'c. consta in disparitia durerii la Nitroglicerina in 2-3 minute.'],
        correctAnswer:[1,2]},
    {question: '544. Criza dureroasa de angor pectoral se instaleaza :',
        choices: [
            'a. la adiministarea unor medicamente ;',
            'b. concomitent cu un efort fizic, emotional, digestiv ;',
            'c. cand bolnavul iese din camera incalzita in atmosfera rece sau geroasa.'],
        correctAnswer:[1,2]},
    {question: '545. Moartea clinica :',
        choices: [
            'a. dureaza 3-4 minute;',
            'b. este un proces ireversibil ;',
            'c. incepe odata cu stopul cardiac.'],
        correctAnswer:[0,2]},
    {question: '546. Stopul respirator consta in oprirea respiratiei:',
        choices: [
            'a. cu oprirea inimii;',
            'b. cu prezenta pulsului bun la artera carotida ;',
            'c. permite pe un interval variabil ( 3-10 minute sau chiar 12 minute) ca reanimarea respiratorie sa aiba succes.'],
        correctAnswer:[1,2]},
    {question: '547. Inainte de a incepe reanimarea cardio - respiratorie salvatorul se va asigura foarte rapid ca este intr- adevar vorba de oprire cardiaca prin :',
        choices: [
            'a. controlul respiratiei : semnul oglinzii ( se pune in fata buzelor oglinda care nuse va aburi cand exista respiratie)',
            'b. controlul pulsatiilor cardiace (puls carotidian, femural) ;',
            'c. controlul reflexului pupilar (midriaza).'],
        correctAnswer:[1,2]},
    {question: '548. Respiratia artificiala trebuie continuata :',
        choices: [
            'a. pana la reluarea miscarilor respiratorii spontane eficiente ;',
            'b. pana la instituirea ventilatiei mecanice controlate;',
            'c. pana se ajunge la o unitate spitaliceasca.'],
        correctAnswer:[0,1]},
    {question: '549. Stopul cardiac:',
        choices: [
            'a. este urmat de stopul respirator in 10-20 sec.;',
            'b. este urmat in mod invariabil si de stopul respirator in 20-30 sec.',
            'c. determina si oprirea circulatiei cerebrale.'],
        correctAnswer:[1,2]},
    {question: '550. Deficitul motor apare in:',
        choices: [
            'a. sindromul hemiplegic',
            'b. sindromul paraplegic si tetraplegic',
            'c. nevralgia sciatica'],
        correctAnswer:[0,1]},
    {question: '551. Cele mai frecvente sindroame musculare sunt:',
        choices: [
            'a. miopatia',
            'b. miotonia',
            'c. radiculitele'],
        correctAnswer:[0,1]},
    {question: '552. Sindromul de neuron motor periferic , cu tulburari de sensibilitate importanta , apare si in:',
        choices: [
            'a. poliradiculonevrita',
            'b. "sindromul de coada de cal"',
            'c. sindromul meningian'],
        correctAnswer:[0,1]},
    {question: '553. Arsurile de gradul I se produc datorita unor agenti termici care actioneaza:',
        choices: [
            'a. timp scurt',
            'b. care au o putere calorica moderata',
            'c. timp indelungat'],
        correctAnswer:[0,1]},
    {question: '554.Arsura de gradul I se caracterizeaza prin:',
        choices: [
            'a. distrugerea tuturor straturilor epidermului',
            'b. eritem, edem, caldura locala, usturime',
            'c. distrugerea straturilor superficiale ale epidermului'],
        correctAnswer:[1,2]},
    {question: '555. Arsura de gradul III se caracterizeaza prin:',
        choices: [
            'a. interesarea epidermului si partial a dermului',
            'b. aparitia flictenelor sero-sanguinolente',
            'c. cicatrizare rapida cu restitutia ad integrum'],
        correctAnswer:[0,1]},
    {question: '556. Tabloul de laborator din socul arsurilor se caracterizeaza prin:',
        choices: [
            'a. hemoconcentratie',
            'b. scaderea numarului de hematii si leucocite',
            'c. cresterea numarului de hematii si a hematocritului'],
        correctAnswer:[0,2]},
    {question: '557. in caz ca socul a durat mult sau nu a fost tratat corectpot apare ca si complicatii :',
        choices: [
            'a. insuficienta cardiaca',
            'b. alterari renale cu albuminurie, glicozurie si hematurie',
            'c. infectia arsurilor'],
        correctAnswer:[0,1]},
    {question: '558. Ce complicatii pot aparea intr-o arsura intinsa?',
        choices: [
            'a. soc hipovolemic',
            'b. infectie, nefrita, bronhopneumonie, hemoragie digestiva',
            'c. escare, intoxicatia centrilor nervosi cerebrali, urmata de confuzii, pierderi de cunostinta, paralizii'],
        correctAnswer:[1,2]},
    {question: '559. Acordarea primelor ingrijiri la bolnavii cu arsuri intinse se va face:',
        choices: [
            'a. la locul accidentului',
            'b. la dispensarul medical',
            'c. in sala de operatii, in conditii de asepsie si antisepsie'],
        correctAnswer:[1,2]},
    {question: '560. indepartarea victimei de curentul electric se va face:',
        choices: [
            'a. cu miinile, neexistind nici un pericol',
            'b. impingerea victimei de linga sursa de curent cu o bucata de lemn',
            'c. impingerea prin intermediul unei haine groase, impaturite'],
        correctAnswer:[1,2]},
    {question: '561. Tratamentul in arsurile prin iradiere trebui sa vizeze dezactivarea radioactiva prin spalaturi abundente cu:',
        choices: [
            'a. apa si sapun',
            'b. solutii antiseptice',
            'c. solutii acide slabe'],
        correctAnswer:[0,1]},
    {question: '562.Epidemiologia este o stiinta medicala care studiaza :',
        choices: [
            'a. bolile cu raspandire in populatie ;',
            'b. bolile cu raspandire mare in populatie, ce creeaza probleme de sanatate publica, perturband dezvoltarea normala a societatii;',
            'c. boli cardiovasculare, neoplaziile, accidentele rutiere, boli psihice, sinuciderile etc.'],
        correctAnswer:[0,1]},
    {question: '563. Profilaxia generala presupune :',
        choices: [
            'a. masurile permanente cu caracter general si educatie sanitara ;',
            'b. supravegherea si controlul preventiv al factorilor epidemiogeni ;',
            'c. masuri tranzitorii care inceteaza o data cu stingerea focarului de infectie.'],
        correctAnswer:[0,1]},
    {question: '564.Profilaxia speciala se refera la :',
        choices: [
            'a. masurile ce trebuie luate in focar pentru combaterea unei boli infectioase;',
            'b. prevenirea unor noi cazuri secundare;',
            'c. masurile indreptate impotriva spectrului de morbiditate .'],
        correctAnswer:[0,1]},
    {question: '565. Triajul epidemiologic presupune :',
        choices: [
            'a. termometrizarea, ex. tegumentelor, cavitatii bucale si conjunctivelor ;',
            'b. masurarea T.A. puls, diureza;',
            'c. informarea privind eventualele contacte la domiciliu .'],
        correctAnswer:[0,2]},
    {question: '566.Triajul epidemiologic se efectueaza :',
        choices: [
            'a. zilnic, in crese si gradinite, inainte de intrarea in colectivitate;',
            'b. in crese si gradinite, dupa intrarea copiilor in colectivitate;',
            'c. la prezentarea copiilor in tabere si la reinceperea cursurilor dupa vacanta .'],
        correctAnswer:[0,2]},
    {question: '567.Termometrizarea zilnica, in cadrul triajului epidemiologic, se efectueaza :',
        choices: [
            'a. de catre asistenta medicala ;',
            'b. saptamanal, la copiii din crese si gradinite;',
            'c. zilnic, la copiii suspecti sau bolnavi din crese si gradinite .'],
        correctAnswer:[0,2]},
    {question: '568.Mijloacele mecanice de dezinfectie sunt:',
        choices: [
            'a. spalarea, aerisirea, ventilatia;',
            'b. stergerea umeda a suprafetelor, folosind agenti chimici;',
            'c. radiatii ultraviolete .'],
        correctAnswer:[0,1]},
    {question: '569.Metodele fizice de dezinfectie :',
        choices: [
            'a. sunt reprezentate in principal de caldura uscata, umeda si radiatii u.v.;',
            'b. se bazeaza pe reactia de oxidare, hidroliza si precipitare ;',
            'c. se realizeaza prin denaturarea proteinelor .'],
        correctAnswer:[0,2]},
    {question: '570.Dezinfectia prin metode chimice se realizeaza prin :',
        choices: [
            'a. spalarea si / sau stergerea cu substante dezinfectante ;',
            'b. scufundarea in substante dezinfectante;',
            'c. iradierea cu ultraviolete pentru dezinfectia aerului .'],
        correctAnswer:[0,1]},
    {question: '571.Vaccinoprofilaxia utilizeaza :',
        choices: [
            'a. vaccinuri corpusculare din culturi de germeni vii, atenuati;',
            'b. vaccinuri preparate din toxine detoxifiate, transformate in anatoxine;',
            'c. vaccinuri din culturi de germeni vii neatenuati, pentru eficienta sporita.'],
        correctAnswer:[0,1]},
    {question: '572.Anginele sunt :',
        choices: [
            'a. cele mai frecvente infectii streptococice;',
            'b. inflamatii ale istmului faringian;',
            'c. afectiuni intalnite numai la copii .'],
        correctAnswer:[0,1]},
    {question: '573.Manifestarile locale cele mai frecvente in angina streptococica sunt :',
        choices: [
            'a. odinofagia;',
            'b. congestia intensa a fundului de gat ;',
            'c. false membrane .'],
        correctAnswer:[0,1]},
    {question: '574.Perioada de incubatie in scarlatina dureaza:',
        choices: [
            'a. 1-2 zile ;',
            'b. 1-10 zile;',
            'c. 3-6 zile .'],
        correctAnswer:[1,2]},
    {question: '575.Complicatiile imunoalergice ale scarlatinei se instaleaza la 15 - 25 zile de la debutul bolii si pot fi :',
        choices: [
            'a. glomerulonefrita difuza acuta;',
            'b. reumatismul articular acut ;',
            'c. colica biliara .'],
        correctAnswer:[0,1]},
    {question: '576.Profilaxia scarlatinei include :',
        choices: [
            'a. masuri de izolare, de supraveghere a contactilor timp de 10 zile ,tratament cu penicilina al purtatorilor ;',
            'b. masuri de dezinfectie in focar de tip continuu si terminal, atat in colectivitati, cat si in locuinte ;',
            'c. supraveghere facultativa a bolnavului .'],
        correctAnswer:[0,1]},
    {question: '577. Ingrijirea unui bolnav cu scarlatina include :',
        choices: [
            'a. aplicarea de comprese reci pe frunte;',
            'b. combaterea pruritului cu lotiuni de alcool mentolat;',
            'c. regim hiperprotidic.'],
        correctAnswer:[0,1]},
    {question: '578. Problemele pacientului cu scarlatina pot fi :',
        choices: [
            'a. alterarea confortului legat de durerea de cap si febra;',
            'b. varsaturi si cefalee din cauza edemului cerebral infectios;',
            'c. hiperdinamie, agitatie legata de starea toxica .'],
        correctAnswer:[0,1]},
    {question: '579.Interventiile asistentei medicale pentru prevenirea complicatiilor la un pacient cu scarlatina constau in :',
        choices: [
            'a. combatarea pruritului ;',
            'b. ingrijirea cavitatii bucale, de 2 ori pe ora;',
            'c. repaus la pat, cel putin 7 zile .'],
        correctAnswer:[1,2]},
    {question: '580.Tratamentul etiologic in scarlatina cuprinde :',
        choices: [
            'a. administrarea de penicilina, eritromicina, la indicatia medicului;',
            'b. continuarea tratamentului la externare cu moldamin ;',
            'c. administrarea de hidrocortizon acetat .'],
        correctAnswer:[0,1]},
    {question: '581. Rujeola se manifesta clinic in perioada de debut prin :',
        choices: [
            'a. febra moderata, catar (nazal, bronsic, ocular), enemtem;',
            'b. catar nazal, febra inalta, diaree;',
            'c. febra +catar + semnul Koplick.'],
        correctAnswer:[0,2]},
    {question: '582. Perioada eruptiva din rujeola se caracterizeaza prin :',
        choices: [
            'a. cresterea mare a febrei;',
            'b. eruptia maculopapuloasa incepe la fata si se generalizeaza descendent in 3 zile;',
            'c. eruptia micropapuloasa cu fond congestiv, aspra la pipait.'],
        correctAnswer:[0,1]},
    {question: '583. Patagnomonic pentru rujeola este :',
        choices: [
            'a. semnul Barsieri;',
            'b. semnul Koplick;',
            'c. catar ocular, nazo-bronsic.'],
        correctAnswer:[1,2]},
    {question: '584.In rujeola eruptia :',
        choices: [
            'a. este insotita de prurit ;',
            'b. nu este insotita de prurit;',
            'c. nu produce prurit.'],
        correctAnswer:[1,2]},
    {question: '585.La aparitia unui caz de rujeola se procedeaza la :',
        choices: [
            'a. izolarea bolnavului in spital sau la domiciliu pe perioada contagiozitatii;',
            'b. urmarirea contactilor nevaccinati sau care nu au trecut prin boala ;',
            'c. administrarea de imunoglobuline dupa 5 zile de la contact.'],
        correctAnswer:[0,1]},
    {question: '586.Manifestarile de dependenta la un pacient cu rujeola in perioada de incubatie sunt:',
        choices: [
            'a. febra, frisoane, tahipnee;',
            'b. greturi, varsaturi, dureri abdominale;',
            'c. apatie, imobilitate.'],
        correctAnswer:[0,1]},
    {question: '587.In perioada eruptiva din rujeola apare:',
        choices: [
            'a. exantemul - macule de culoare rosie (pe fata, dupa urechi, gat);',
            'b. inapetenta, stare de neliniste, nervozitate;',
            'c. tegumente palide, reci.'],
        correctAnswer:[0,1]},
    {question: '588.Interventiile asistentei medicale la un pacient cu rujeola vizeaza :',
        choices: [
            'a. pastrarea permeabilitatii cailor respiratorii;',
            'b. reechilibrarea hidro-electrolitica;',
            'c. imobilizarea pacientului in perioada eruptive.'],
        correctAnswer:[0,1]},
    {question: '589.Problemele pacientului cu rujeola pot fi:',
        choices: [
            'a. dispnee cu polipnee cauzata de febra;',
            'b. potential de deficit de lichide legat de varsaturi, transpiratii;',
            'c. hipotermie .'],
        correctAnswer:[0,1]},
    {question: '590.Interventiile asistentei medicale pentru diminuarea obstructiei cailor respiratorii, tusei, polipneei constau in:',
        choices: [
            'a. aplicarea compreselor hipotermizante ;',
            'b. umidificarea aerului din incapere;',
            'c. administrarea medicatiei prescrise de medic .'],
        correctAnswer:[1,2]},
    {question: '591.Rubeola este o boala :',
        choices: [
            'a. infectioasa, virala, ce evolueaza favorabil , cu adenopatii, eruptie micropapuloasa fugace si febra inconstanta ;',
            'b. cu izolare la domiciliu ;',
            'c. cu contagiozitate majora ce impune internarea obligatorie in spital.'],
        correctAnswer:[0,9]},
    {question: '592.In rubeola, modul de transmitere este :',
        choices: [
            'a. aerogen;',
            'b. prin contact cu obiecte recent contaminate de secretii;',
            'c. digestiv.'],
        correctAnswer:[0,1]},
    {question: '593.Alaturi de eruptie, un alt simptom cardinal in rubeola este :',
        choices: [
            'a. poliadenopatia;',
            'b. febra inalta la adulti;',
            'c. ciclul lingual .'],
        correctAnswer:[0,1]},
    {question: '594.Dintre rarele complicatii ale rubeolei se pot mentiona :',
        choices: [
            'a. poliartrita;',
            'b. purpura trombocitopenica si meningoencefalita;',
            'c. reumatismul articular acut .'],
        correctAnswer:[0,1]},
    {question: '595.Tratamentul rubeolei este :',
        choices: [
            'a. simptomatic;',
            'b. etiologic;',
            'c. igienic .'],
        correctAnswer:[0,2]},
    {question: '596. Orhita urliana, complicatie a parotiditei epidemice, apare la:',
        choices: [
            'a. fete;',
            'b. baieti;',
            'c. dupa pubertate .'],
        correctAnswer:[1,2]},
    {question: '597. Calea de transmitere in tusea convulsiva este :',
        choices: [
            'a. aerogena, prin picaturi din secretiile respiratorii expulzate prin tuse;',
            'b. digestiva, prin maini murdare ;',
            'c. prin obiecte recent contaminate .'],
        correctAnswer:[0,2]},
    {question: '598. Tusea convulsiva, evolueaza endemo-epidemic cu " ingrosari" epidemice la sfarsitul',
        choices: [
            'a. iernii;',
            'b. primaverii;',
            'c. verii.'],
        correctAnswer:[0,1]},
    {question: '599.Izvorul epidemilogic in poliomielita este omul infectat, calea de transmitere fiind:',
        choices: [
            'a. fecal-orala;',
            'b. aerogena, prin contact intim la inceputul bolii ;',
            'c. parenterala.'],
        correctAnswer:[0,1]},
    {question: '600.Poliomielita face parte din categoria bolilor transmisibile :',
        choices: [
            'a. cu declarare nominala obligatorie;',
            'b. internare si tratament obligatoriu in spital ;',
            'c. tratament la domiciliu si izolare obligatorie .'],
        correctAnswer:[0,1]},
    {question: '601.Sindromul meningian - un grup de simptome si semne, apare in :',
        choices: [
            'a. meningita tuberculoasa;',
            'b. meningita seroasa ;',
            'c. tetanos .'],
        correctAnswer:[0,1]},
    {question: '602.Meningita meningococica detine primul loc ca frecventa in etiologia meningitelor purulente la :',
        choices: [
            'a. copii;',
            'b. adulti peste 40 ani;',
            'c. tineri .'],
        correctAnswer:[0,2]},
    {question: '603. Calea de transmitere a meningitei poate fi :',
        choices: [
            'a. hematogena ;',
            'b. prin contiguitate ;',
            'c. aerogena .'],
        correctAnswer:[0,1]},
    {question: '604. Simptomatologia afectarii meningiene cuprinde :',
        choices: [
            'a. febra, cefalee puternica, fotofobie;',
            'b. varsaturi si somnolenta pana la coma;',
            'c. subfebrilitate, agitatie, greata.'],
        correctAnswer:[0,1]},
    {question: '605.Encefalitele acute postinfectioase survin in convalescenta unor boli infectioase precum:',
        choices: [
            'a. rujeola;',
            'b. varicela;',
            'c. hepatita virala A.'],
        correctAnswer:[0,1]},
    {question: '606. Tabloul clinic in encefalita cuprinde :',
        choices: [
            'a. febra, cefalee, tulburari de senzoriu;',
            'b. convulsii, diverse paralizii ;',
            'c. greturi, varsaturi, oligurie.'],
        correctAnswer:[0,1]},
    {question: '607.Tratamentul encefalitei consta in :',
        choices: [
            'a. chimioterapie antivirala;',
            'b. medicatie antiinflamatorie si antiedematoasa;',
            'c. imunoterapie cu imonoglobuline specifice .'],
        correctAnswer:[0,1]},
    {question: '608. Profilaxia encefalitelor virale :',
        choices: [
            'a. cuprinde protectia celor expusi prin masuri generale sau prin vaccinuri formolate;',
            'b. urmareste combaterea vectorilor;',
            'c. consta in protectie generala prin vaccinare specifica .'],
        correctAnswer:[0,1]},
    {question: '609. Boala acuta ce apare sporadic sau epidemic in urma consumului de alimente contaminate cu diverse bacterii se numeste:',
        choices: [
            'a. rujeola;',
            'b. toxiinfectie alimentara;',
            'c. parotidita epidemica.'],
        correctAnswer:[0,1]},
    {question: '610. Toxiinfectiile alimentare survin in urma unor situatii patogenice :',
        choices: [
            'a. prin ingestia toxinei eliberata in aliment;',
            'b. prin ingestia unor alimente in care germenul s-a dezvoltat in foarte mare cantitate;',
            'c. in parazitoza intestinala .'],
        correctAnswer:[0,1]},
    {question: '611.Febra tifoida este o boala:',
        choices: [
            'a. transmisibila cu declarare obligatorie;',
            'b. specifica omului ;',
            'c. produsa de Rickettsia Prowazekii.'],
        correctAnswer:[0,1]},
    {question: '612. In febra tifoida este obligatorie:',
        choices: [
            'a. spitalizarea;',
            'b. declararea nominala;',
            'c. imobilizarea pacientului.'],
        correctAnswer:[0,1]},
    {question: '613. Receptivitatea la dizenterie este generala, mai mare la :',
        choices: [
            'a. copii sub 5 ani;',
            'b. varstnici;',
            'c. barbati.'],
        correctAnswer:[0,1]},
    {question: '614. Tetanosul impune :',
        choices: [
            'a. izolarea obligatorie in spital ;',
            'b. declararea nominala obligatorie;',
            'c. regimul alimentar strict .'],
        correctAnswer:[0,1]},
    {question: '615.Injectiile vor fi administrete numai daca:',
        choices: [
            'a. fiolele sunt etichetate si, atat denumirea cat si dozajul sa corespunda celor prescrise;',
            'b. aspectul solutiei de injectii sa fie clar , transparent, fara precipitate',
            'c. sa aiba data de valabilitate , dar poate sa fie precipitat;'],
        correctAnswer:[0,1]},
    {question: '616. La administrarea injectiei este necesar sa verifice;',
        choices: [
            'a. integritatea fiolei;',
            'b. integritatea seringii si data valabilitatii;',
            'c. nu are importanta nici o varianta din cele enumerate;'],
        correctAnswer:[0,1]},
    {question: '617. Cauzele toxice care pot provoaca ciroza hepatica sunt:',
        choices: [
            'a. alcoolul;',
            'b. toxice industriale;',
            'c. medicamente hepatotrofice;'],
        correctAnswer:[0,1]},
    {question: '618. Care sunt tipurile de ciroza alcoolica ;',
        choices: [
            'a. ciroza atrofica;',
            'b. ciroza hipertrofica;',
            'c. ciroza splenogena;'],
        correctAnswer:[0,1]},
    {question: '619.In ciroza hepatica icterul poate fi:',
        choices: [
            'a. episodic;',
            'b. cu carecter permanent;',
            'c. nu apare icter;'],
        correctAnswer:[0,1]},
    {question: '620. Stadiile descrise in ciroza hepatica sunt:',
        choices: [
            'a. stadiu compensat;',
            'b. stadiul decompensat;',
            'c. stadiul vascular;'],
        correctAnswer:[0,1]},
    {question: '621. In stadiul decompensat al cirozei hepatice apare :',
        choices: [
            'a. ascita;',
            'b. edemul membranelor inferioare;',
            'c. icter;'],
        correctAnswer:[0,1]},
    {question: '622.Tulburarile hemoragice ce apar in evolutia bolnavilor cu ciroza hepatica sunt :',
        choices: [
            'a. varice esofagiene care se rup;',
            'b. scaderea factorilor de coagulare in sange;',
            'c. ingestia de medicamente;'],
        correctAnswer:[0,1]},
    {question: '623. Etiologia cirozei atrofice poate fi:',
        choices: [
            'a. etiologie alcoolica;',
            'b. etiologie virala;',
            'c. etiologie necunoscuta;'],
        correctAnswer:[0,1]},
    {question: '624.Cele mai frecvente complicatii in cirozele hepatice sunt:',
        choices: [
            'a. hemoragia digestive superioara',
            'b. encefalopatia portala;',
            'c. HTA;'],
        correctAnswer:[0,1]},
    {question: '625. In cazul hemoragiei digestive prognosticul este:',
        choices: [
            'a. rezervat;',
            'b. este o stare trecatoare;',
            'c. rezervat atat imediat cat si de viitor;'],
        correctAnswer:[0,2]},
    {question: '626. Coma hepatica din ciroze poate aparea in cazul;',
        choices: [
            'a. insuficientei hepatice;',
            'b. in encefalopatia hepatoportala;',
            'c. in insuficienta renala;'],
        correctAnswer:[0,1]},
    {question: '627. Cele mai importante masuri de profilaxia in ciroza hepatica sunt:',
        choices: [
            'a. tratamentul corect al hepatitei;',
            'b. dispensarizarea indelungata;',
            'c. interventia chirurgicala;'],
        correctAnswer:[0,1]},
    {question: '628. In cazul ascitei dieta va fi:',
        choices: [
            'a. desodata;',
            'b. hipersodata;',
            'c. bogata in potasiu;'],
        correctAnswer:[0,1]},
    {question: '629. Splenectomia este indicata:',
        choices: [
            'a. in profilactic;',
            'b. in ciroza de tip Bantian;',
            'c. in hipersplenismul sever;'],
        correctAnswer:[1,2]},
    {question: '630. Paracenteza se recomanda:',
        choices: [
            'a. in toate cazurile de ascita;',
            'b. numai de necessitate;',
            'c. daca afecteaza functiile respiratorii;'],
        correctAnswer:[1,2]},
    {question: '631.Masurile de ingrijire in cazul cirozei hepatice constau in:',
        choices: [
            'a. izolarea bolnavului;',
            'b. aerisirea camerei;',
            'c. schimbarea frecventa a pozitiei bolnavului;'],
        correctAnswer:[0,2]},
    {question: '632. In ciroza hepatica aportul de lichide va fi:',
        choices: [
            'a. echilibrat ;',
            'b. hiperhidratare;',
            'c. parenteral si peros;'],
        correctAnswer:[0,2]},
    {question: '633. Cauzele ce determina decompensarea cirozei hepatice sunt:',
        choices: [
            'a. boli infectioase;',
            'b. un pranz copios completat de efort fizic;',
            'c. hemoragii digestive si interventii chirurgicale ;'],
        correctAnswer:[0,2]},
    {question: '634.Entorsa este o afectiune traumatica a articulatiei caracterizata prin:',
        choices: [
            'a. intindere a ligamentelor si capsulei articulare',
            'b. rupturi a ligamentelor',
            'c. afectiune cronica a articulatiei'],
        correctAnswer:[0,1]},
    {question: '635.Entorsele sunt afectiuni:',
        choices: [
            'a. simple',
            'b. in care apar leziuni de vase si dezinsertii ligamentare',
            'c. lipsite de importanta'],
        correctAnswer:[0,1]},
    {question: '636. Simptomele entorsei sunt:',
        choices: [
            'a. durerea',
            'b. impotenta functionala',
            'c. febra'],
        correctAnswer:[0,1]},
    {question: '637. Hemartroza se defineste prin:',
        choices: [
            'a. prezenta singelui in cavitatea articulatiei',
            'b. prezenta apei in cavitatea articulatiei',
            'c. apare numai in articulatia genunchiului sau in orice articulatie'],
        correctAnswer:[0,2]},
    {question: '638.Echimoza apare in:',
        choices: [
            'a. numai cind s-au produs smulgeri de ligamente si rupturi de vase',
            'b. smulgeri de fragmente osoase',
            'c. iorice entorsa'],
        correctAnswer:[0,1]},
    {question: '639.Masurile de urgenta intr-o entorsa constau in:',
        choices: [
            'a. calmarea durerii',
            'b. imobilizarea articulatiei intr-o fasa simpla sau gipsata',
            'c. aplicarea unei atele'],
        correctAnswer:[0,1]},
    {question: '640.Interventia chirurgicala este obligatorie:',
        choices: [
            'a. in cazul unor smulgeri de ligamente pe suprafete mari',
            'b. in cazul rupturilor de menisc',
            'c. dupa imobilizarea articulatiei si calmarea durerii'],
        correctAnswer:[0,2]},
    {question: '641. Entorsa tratata incorect poate produce:',
        choices: [
            'a. artroza in articulatia respectiva',
            'b. limitarea mobilitatii articulatiei',
            'c. durere'],
        correctAnswer:[0,1]},
    {question: '642.Luxatia poate apare datorita unui traumatism:',
        choices: [
            'a. violent',
            'b. mai putin violent',
            'c. nu are importanta intensitatea traumatismului'],
        correctAnswer:[0,1]},
    {question: '643.Din urmatoarele afectiuni traumatice sunt luxatii:',
        choices: [
            'a. disjunctia',
            'b. diastazis',
            'c. deformarea regiunii'],
        correctAnswer:[0,1]},
    {question: '644.Luxatia se caracterizeaza prin:',
        choices: [
            'a. durere vie si impotenta functionala',
            'b. echimoza, hematom, deformarea regiunii articulare',
            'c. febra'],
        correctAnswer:[0,1]},
    {question: '645.Examenul radiologic este obligatoriu in luxatii:',
        choices: [
            'a. arata pozitia in care se afla segmentele luxate',
            'b. arata daca nu exista o fractura concomitenta',
            'c. nu este obligatoriu'],
        correctAnswer:[0,1]},
    {question: '646. Tratamentul luxatiei se va face:',
        choices: [
            'a. cit mai urgent posibil',
            'b. se face sub anestezie generala',
            'c. se face dupa ce se administreaza calmante'],
        correctAnswer:[0,1]},
    {question: '647.Reducerea luxatiei se face sub anestezie generala pe cale:',
        choices: [
            'a. ortopedica (nesingerinda)',
            'b. chirurgicala (singerinda)',
            'c. daca reducerea luxatiei nu reuseste pe cale ortopedica (nesingerinda) se va face pe cale chirurgicala (singerinda)'],
        correctAnswer:[0,2]},
    {question: '648. Dupa o perioada de imobilizare in cazul unei luxatii tratamentul de recuperare balneo-fizio-kinetoterapie este:',
        choices: [
            'a. indicat',
            'b. contraindicat',
            'c. indicat si asociat cu tratamente specifice'],
        correctAnswer:[0,2]},
    {question: '649.Echimoza intr-o fractura apare:',
        choices: [
            'a. la scurt timp dupa producerea fracturii in cazul fracturii vaselor superficiale',
            'b. mai tirziu cind este interesat un segment de os acoperit de mase musculare mari',
            'c. echimoza nu apare in fracturi'],
        correctAnswer:[0,1]},
    {question: '650.in cazul unei fracturi, deformarea regiunii este un semn:',
        choices: [
            'a. extrem de important',
            'b. este vizibil la vasele care se gasesc in contact direct cu pielea',
            'c. in fracturi nu apare deformarea regiunii'],
        correctAnswer:[0,2]},
    {question: '651.In cazul unei fracturi apar urmatoarele semne locale:',
        choices: [
            'a. intreruperea continuitatii osului',
            'b. impotenta functionala datorita lipsei de continuitate a pirghiei osoase',
            'c. hipotermii'],
        correctAnswer:[0,1]},
    {question: '652. Asiguram ca masurile de prim ajutor la locul accidentului in cazul unor fracturi ale membrului:',
        choices: [
            'a. o fractura trebuie imediat imobilizata provizoriu',
            'b. se va administra un calmant pentru combaterea durerii',
            'c. oxigenoterapie'],
        correctAnswer:[0,1]},
    {question: '653.Imobilizarea provizorie se face cu atele care se aplica:',
        choices: [
            'a. de o parte si de alta a segmentului zonei fracturate a membrului respectiv',
            'b. se vor stringe moderat intre ele cu un bandaj',
            'c. se va face un pansament compresiv'],
        correctAnswer:[0,1]},
    {question: '654. In cazul fracturilor deschise se practica urmatoarele manevre de prim ajutor:',
        choices: [
            'a. curatirea plagii de corpuri straine, hemostaza provizorie, acoperirea plagii cu un pansament steril',
            'b. reducerea focarului de fractura',
            'c. imobilizarea provizorie si trimiterea de urgenta intr-un serviciu de specialitate'],
        correctAnswer:[0,2]},
    {question: '655.in care dintre articulatii, in cazul unor luxatii, se poare vorbi de diastazis sau disjunctie?',
        choices: [
            'a. articulatia soldului',
            'b. articulatia acronioclaviculara',
            'c. articulatia celor doua oase pubiene'],
        correctAnswer:[0,2]},
    {question: '656.Durata de imobilizare in aparat gipsat, dupa reducerea chirurgicala este:',
        choices: [
            'a. aceeasi cu reducerea pe cale ortopedica',
            'b. este mai mare cu 20-30 zile fata de reducerea ortopedica',
            'c. fac exceptia unele fracturi la care s-au putut introduce tije metalice centromedulare'],
        correctAnswer:[1,2]},
    {question: '657.Iimobilizarea prelungita are drept consecinta:',
        choices: [
            'a. hipertrofie musculara',
            'b. hipotrofia musculara',
            'c. redoarea articulara'],
        correctAnswer:[1,2]},
    {question: '658.Plagile produse prin muscaturi de animal contaminat cu turbare sunt:',
        choices: [
            'a. contuze',
            'b. infectate',
            'c. cu marginile regulate'],
        correctAnswer:[0,1]},
    {question: '659. Plagile netratate la timp se pot complica cu:',
        choices: [
            'a. lipotimie',
            'b. tromboflebite, septicemie',
            'c. supuratii locale'],
        correctAnswer:[1,2]},
    {question: '660.Dupa intepaturile unor insecte (viespi, albine) apar urmatoarele fenomene:',
        choices: [
            'a. insuficienta respiratorie acuta, edem de glota',
            'b. oligoanurie cu insuficienta renala acuta',
            'c. fenomene anafilactice cu edem al fetei si gitului, cefalee'],
        correctAnswer:[0,2]},
    {question: '661.in cazul muscaturii de sarpe se va face:',
        choices: [
            'a. aplicarea garoului pentru impiedicarea difuziunii',
            'b. perfuzii cu ser fiziologic sau glucozat',
            'c. suctiunea veninului sau excizie larga a plagii muscate'],
        correctAnswer:[0,2]},
    {question: '662.Conditiile care , stau la baza efectuarii unui bun pansament sunt:',
        choices: [
            'a. sa acopere complet plaga',
            'b. sa aiba o buna putere absorbanta',
            'c. sa fie strins, ca sa nu alunece'],
        correctAnswer:[0,1]},
    {question: '663 Avantajele fixarii pansamentului cu materiale adezive si nu cu fasa sunt:',
        choices: [
            'a. executie mult mai rapida si nedureroasa pentru bolnav',
            'b. se executa fara a ridica bolnavul sau segmentul respectiv',
            'c. sa indeparteaza mult mai simpla si mai usor'],
        correctAnswer:[0,1]},
    {question: '664.Conditiile unui bun bandaj sunt:',
        choices: [
            'a. infasarea se executa cu miscari bine coordonate evitind provocarea de dureri',
            'b. infasarea se va face de la stinga la dreapta (celui care executa)',
            'c. infasarea se va face compresiv pentru a mentine pansamentul'],
        correctAnswer:[0,1]},
    {question: '665.Cind se executa infasarea sub forma de spic (spica)?',
        choices: [
            'a. pentru realizarea unei compresiuni asupra unei articulatii',
            'b. pentru a mentine un pansament in care se fac miscari ample',
            'c. pentru mentinerea pansamentului la nivelul nasului si barbiei'],
        correctAnswer:[0,1]},
    {question: '666.Prevenirea escarelor la bolnavul imobilizat timp indelungat se face prin :',
        choices: [
            'a. schimbarea pozitiei in pat',
            'b. masaj zilnic, frictiuni cu alcool urmate de pudrare cu talc',
            'c. schimbarea pozitiei in pat nu este importanta daca se face masaj zilnic'],
        correctAnswer:[0,1]},
    {question: '667.La bolnavii imobilizati la pat timp indelungat pot aparea ca si complicatii:',
        choices: [
            'a. pneumonii hipostatice',
            'b. tromboze ale membrelor inferioare',
            'c. hipertensiune, tahicardie'],
        correctAnswer:[0,1]},
    {question: '668.Imobilizarea indelungata a unor bolnavi la pat este:',
        choices: [
            'a. o masura terapeutica',
            'b. consecinta anumitor afectiuni grave',
            'c. o masura de supraveghere a bolnavului'],
        correctAnswer:[0,1]},
    {question: '669.Imobilizarea bolnavului la pat este o masura terapeutica in caz de:',
        choices: [
            'a. fracturi, traumatisme',
            'b. infarct miocardic',
            'c. insuficienta cardiaca'],
        correctAnswer:[0,9]},
    {question: '670. Din complicatiile enumerate mai jos trebuie prevenite la bolnavii imobilizati la pat:',
        choices: [
            'a. formarea trombozelor, pneumoniilor hipostatice',
            'b. atrofierea musculara, escarele de decubit',
            'c. hipotensiune arteriala'],
        correctAnswer:[0,1]},
    {question: '671. Inactivitatea indelungata a bolnavilor imobilizati la pat poate avea repercursiuni asupra sistemului osos producind:',
        choices: [
            'a. rarefierea structurii osoase',
            'b. aparitia osteoporozei de inactivitate',
            'c. artroze'],
        correctAnswer:[0,1]},
    {question: '672.Tipul de saltea recomandat pentru bolnavii imobilizati timp indelungat?',
        choices: [
            'a. saltea cu structura de burete',
            'b. saltea din material plastic cu structura de burete',
            'c. saltea antidecubit'],
        correctAnswer:[1,2]},
    {question: '673.Confortul bolnavului imobilizat la pat trebuie asigurat prin:',
        choices: [
            'a. prin schimbari pasive de pozitie',
            'b. schimbarea pozitiei se va face cu ajutorul unor utilaje auxiliare',
            'c. schimbarea pozitii este contraindicata la bolnavii imobilizati'],
        correctAnswer:[1,9]},
    {question: '674.Rolul asistentei medicale in asigurarea confortului bolnavilor imobilizati consta in:',
        choices: [
            'a. asistenta trebuie sa aranjeze totul la indemina bolnavului',
            'b. asistenta trebuie sa explice modul de utilizare a declansatorului de semnalizare (sonerie)',
            'c. sa explice bolnavului programul sectiei'],
        correctAnswer:[0,1]},
    {question: '675.Examinarile complementare de laborator la bolnavii imobilizati se vor face:',
        choices: [
            'a. astfel ca bolnavul sa nu fie ridicat din pat',
            'b. bolnavul va fi transportat cu patul',
            'c. bolnavul va fi transportat cu caruciorul cu rotile'],
        correctAnswer:[0,1]},
    {question: '676.Aparitia trombozelor venoase poate fi prevenita prin:',
        choices: [
            'a. masaj usor al membrelor',
            'b. mobilizarea activa sau pasiva a degetelor picioarelor si miinilor, eventual a gambelor si antebratelor',
            'c. tratament medicamentos'],
        correctAnswer:[0,1]},
    {question: '677.Masajul aplicat in masura prescrisa de medic previne:',
        choices: [
            'a. aparitia atrofiilor musculare',
            'b. intr-o oarecare masura aparitia osteoporozei',
            'c. aparitia complicatiilor cardio-vasculare'],
        correctAnswer:[0,1]},
    {question: '678.Prevenirea pneumoniilor hipostatice se face prin urmatoarele metode:',
        choices: [
            'a. gimnastica respiratorie',
            'b. ridicarea bolnavului in pozitie semisezind',
            'c. aerisirea salonului de mai multe ori pe zi'],
        correctAnswer:[0,1]},
    {question: '679.Stimularea functiilor pielii si a circulatiei cutanate, tonificarea vaselor superficiale se va face zilnic prin:',
        choices: [
            'a. toaleta zilnica',
            'b. frectionare cu alcool diluat pe toata suprafata corpului',
            'c. aplicare de comprese umede'],
        correctAnswer:[0,1]},
    {question: '680.Prin asigurarea unei pozitii corecte in pat pot fi prevenite aparitia:',
        choices: [
            'a. deformarilor articulare',
            'b. pozitiei vicioase ale membrelor si coloanei vertebrale',
            'c. complicatiilor respiratorii'],
        correctAnswer:[0,1]},
    {question: '681.Comportamentul personalului medical care ingrijeste bolnavii imobilizati timp indelungat trebuie sa fie caracterizat prin:',
        choices: [
            'a. atitudine calma, plina de blindete',
            'b. gesturi lipsite de repezeala,promtitudine',
            'c. profesionalism'],
        correctAnswer:[0,1]},
    {question: '682.Dupa terminarea perioadei de imobilizare indelungata la pat reluarea activitatii se va face prin:',
        choices: [
            'a. mobilizarea progresiva cu mare precautie',
            'b. mobilizarea se va face numai la indicatia medicului',
            'c. mobilizarea se va face in functie de vointa bolnavului'],
        correctAnswer:[0,1]},
    {question: '683.La mobilizarea bolnavului se va supraveghea cu atentie:',
        choices: [
            'a. pulsul, TA, respiratia',
            'b. coloratia tegumentelor si mucoaselor',
            'c. starea de echilibru'],
        correctAnswer:[0,1]},
    {question: '684.Imobilizarea indelungata a bolnavilor la pat este consecinta unor afectiuni grave in caz de:',
        choices: [
            'a. accidente vasculare cerebrale',
            'b. paralizii, leziuni a membrelor inferioare',
            'c. boli reumatismale'],
        correctAnswer:[0,1]},
    {question: '685.Imobilizarea bolnavului la pat este o masura terapeutica in caz de:',
        choices: [
            'a. fracturi, traumatisme',
            'b. infarct miocardic',
            'c. afectiuni respiratorii'],
        correctAnswer:[0,1]},
    {question: '686. Socul este o grava tulburare functionala a intregului organism exteriorizata clinic prin:',
        choices: [
            'a. prabusirea circulatiei',
            'b. tulburarea echilibrelor metabolice',
            'c. insuficienta respiratorie acuta'],
        correctAnswer:[0,1]},
    {question: '687. In aparitia socului joaca un rol important:',
        choices: [
            'a. intensitatea agentului declansator',
            'b. posibilitatile de aparare ale SNC',
            'c. hipoperfuzia tisulara'],
        correctAnswer:[0,2]},
    {question: '688.Alterarea grava a functiilor organismului in soc se datoreaza:',
        choices: [
            'a. scaderii aportului de oxigen',
            'b. dereglarii mecanismelor de echilibru corticosubcortical',
            'c. cresterii produsilor toxici rezultati din metabolism si care se acumuleaza in singe'],
        correctAnswer:[0,2]},
    {question: '689.Socul traumatic se poate combina cu o varietate de socuri, dar mai ales cu:',
        choices: [
            'a. socul hipovolemic',
            'b. socul hemoragic',
            'c. socul septic'],
        correctAnswer:[1,2]},
    {question: '690.Prevenirea socului anafilactic se poate face prin:',
        choices: [
            'a. testarea sensibilitatii la substantele iodate, antibiotice',
            'b. anamneza corecta a bolnavilor',
            'c. administrarea de antihistaminice de sinteza (Romergan, Feniramin)'],
        correctAnswer:[0,1]},
    {question: '691. Modificarile hemodinamice care se produc in socul decompensat sunt:',
        choices: [
            'a. cresterea volumului circulant',
            'b. cresterea patului vascular prin vasodilatatie',
            'c. pierderea de electroliti'],
        correctAnswer:[1,2]},
    {question: '692.Coma hipoglicemica are urmatoarele caracteristici:',
        choices: [
            'a. este de obicei profunda',
            'b. pielea este uscata',
            'c. respiratia este de tip Cheyne-Stockes'],
        correctAnswer:[0,2]},
    {question: '693.Coma diabetica este totdeauna precedata de o faza prodromala caracterizata clinic prin:',
        choices: [
            'a. polipnee cu halena acetonica',
            'b. anorexie totala insotita de greturi, varsaturi',
            'c. deshidratare totala'],
        correctAnswer:[0,1]},
    {question: '694.Pe linga cele trei semne majore, pacientul cu coma diabetica mai poate prezenta:',
        choices: [
            'a. dureri abdominale',
            'b. senzatie de foame',
            'c. halena acetonica'],
        correctAnswer:[0,2]},
    {question: '695.Cauzele comei hipoglicemice sunt:',
        choices: [
            'a. doza insuficienta de insulina',
            'b. alimentatie insuficienta',
            'c. eforturi fizice mari'],
        correctAnswer:[1,2]},
    {question: '696.Tabloul clinic al comei hipoglicemice se caracterizeaza prin:',
        choices: [
            'a. transpiratii profuze',
            'b. piele uscata',
            'c. agitatie psihic'],
        correctAnswer:[0,2]},
    {question: '697. Coma hipoglicemica la un pacient diabetic se diferentiaza de coma diabetica prin:',
        choices: [
            'a. absenta respiratiei de tip Kussmaul si a halenei acetonice',
            'b. absenta fenomenelor de deshidratare',
            'c. cresterea tensiunii arteriale'],
        correctAnswer:[0,1]},
    {question: '698.Coma hipoglicemica poate fi precedata de:',
        choices: [
            'a. foame imperioasa',
            'b. senzatie de greata',
            'c. agitatie psiho-motorie'],
        correctAnswer:[0,2]},
    {question: '699.Masurile de ordin general care trebuiesc intreprinse in cazul socului traumatic sunt:',
        choices: [
            'a. inlaturarea factorului socogen',
            'b. administrarea de lichide per os',
            'c. aprecierea rapida a starii functiilor vitale'],
        correctAnswer:[0,2]},
    {question: '700. Pacientul aflat in soc decompensat (faza socului ireversibil) prezinta urmatoarele semne:',
        choices: [
            'a. este linistit, somnolent',
            'b. extremitati cianotice',
            'c. este inconstient'],
        correctAnswer:[0,1]},
    {question: '701. Socul poate fi determinat de:',
        choices: [
            'a. pierderi masive de singe',
            'b. transfuzii de singe',
            'c. dezechilibre metabolice'],
        correctAnswer:[0,1]},
    {question: '702. Socul se deosebeste de colaps prin urmatoarele elemente:',
        choices: [
            'a. este o manifestare hemodinamica si metabolica',
            'b. este o perturbare grava si durabila',
            'c. este o manifestare exclusiv hemodinamica - scaderea tensiunii arteriale, de obicei tranzitorie'],
        correctAnswer:[0,1]},
    {question: '703. In tratamentul socului hipovolemic este importanta:',
        choices: [
            'a. administrarea de oxigen',
            'b. refacerea volemiei',
            'c. administrarea de vasopresoare'],
        correctAnswer:[0,1]},
    {question: '704. Combaterea hipovolemiei se face prin administrare de:',
        choices: [
            'a. Dextran 70 in solutie de NaCl, 1000-1500 ml',
            'b. Ser fiziologic',
            'c. Solutie Ringer lactat'],
        correctAnswer:[0,2]},
    {question: '705. Diabetul zaharat tip 2 se caracterizeaza prin urmatoarele:',
        choices: [
            'a. apare la persoane tinere',
            'b. debutul este insidios',
            'c. evolutia este progresiva'],
        correctAnswer:[1,2]},
    {question: '706.Semnele neurologice intilnite in coma hipoglicemica sunt:',
        choices: [
            'a. convulsii, uneori crize epileptiforme, contracturi puternice cu inclestarea gurii',
            'b. semnul Babinski prezent bilateral',
            'c. semnul Babinski absent, reflexe abolite'],
        correctAnswer:[0,1]},
    {question: '707. Diagnosticul diferential al diabetului zaharat se face cu:',
        choices: [
            'a. diabetul insipid',
            'b. diabetul femeii insarcinate',
            'c. diabetul renal'],
        correctAnswer:[0,2]},
    {question: '708. Complicatiile diabetului zaharat pot fi:',
        choices: [
            'a. acute',
            'b. cronice',
            'c. vasculare'],
        correctAnswer:[0,1]},
    {question: '709. Compensarea acidozei in soc se face prin administrarea de:',
        choices: [
            'a. solutie Ringer - lactat',
            'b. bicarbonat de sodiu izo sau hipertonic',
            'c. THAM 100-150 ml'],
        correctAnswer:[1,2]},
    {question: '710.Tratamentul in socul hemoragic va urmari:',
        choices: [
            'a. compensarea pierderilor prin transfuzie de singe izogrup si Rh',
            'b. administrarea de vasopresoare',
            'c. administrarea de substituenti volemici'],
        correctAnswer:[0,2]},
    {question: '711.Terapia antisoc va tine pina cind:',
        choices: [
            'a. TA creste, pulsul se regularizeaza, culoarea tegumentelor si mucoaselor se normalizeaza',
            'b. diureza creste la peste 40 ml/h, bolnavul e constient, cooperant',
            'c. dispare midriaza, tegumentele devin calde'],
        correctAnswer:[0,1]},
    {question: '712.In stadiu de coma diabetica se remarca:',
        choices: [
            'a. scaderea rezervei alcaline',
            'b. cresterea pH-ului',
            'c. cresterea acidozei metabolice'],
        correctAnswer:[0,2]},
    {question: '713. Hipoglicemia usoara este caracterizata prin transpiratii profuze, ameteli, astenie, foame exagerata. Aceste fenomene credeaza dupa:',
        choices: [
            'a. ingestia de glucide',
            'b. administrare de ser fiziologic',
            'c. administrare de glucoza'],
        correctAnswer:[0,2]},
    {question: '714.In socul anafilactic intubatia orotraheala se practica in caz de:',
        choices: [
            'a. asfixie',
            'b. spasm laringian',
            'c. bronhospasm prelungit'],
        correctAnswer:[1,2]},
    {question: '715.Tratamentul comei diabetice in spital trebuie sa fie:',
        choices: [
            'a. etapizat pe ore',
            'b. in functie de valorile ionogramei',
            'c. strict individualizat'],
        correctAnswer:[0,2]},
    {question: '716.Insulina cu actiune rapida se poate administra:',
        choices: [
            'a. numai subcutanat',
            'b. subcutanat',
            'c. intravenos, la indicatia medicului'],
        correctAnswer:[1,2]},
    {question: '717.Inainte de administrare flaconul cu insulina trebuie:',
        choices: [
            'a. sa fie tinut la loc luminos',
            'b. sa fie incalzit la temperatura camerei',
            'c. sa se agite pina se omogenizeaza'],
        correctAnswer:[1,2]},
    {question: '718.Accidentele care pot aparea dupa administrarea de insulina sunt:',
        choices: [
            'a. alergia la insulina, hipoglicemia',
            'b. infectii locale, lipodistrofia',
            'c. cetonuria'],
        correctAnswer:[0,1]},
    {question: '719.Administrarea glucozei in coma diabetica se face pentru:',
        choices: [
            'a. prevenirea hipoglicemiei',
            'b. echilibrarea hidroelectrolitica',
            'c. disparitia cetozei'],
        correctAnswer:[0,2]},
    {question: '720.Hidratarea bolnavului in coma se face sub controlul:',
        choices: [
            'a. glicemiei, pH-ului sanguin',
            'b. ionogramei',
            'c. echilibrului acido-bazic'],
        correctAnswer:[1,2]},
    {question: '721.In raport cu gravitatea socului apar urmatoarele semne:',
        choices: [
            'a. tensiunea arteriala scade',
            'b. pulsul se accelereaza',
            'c. pupilele sunt micsorate'],
        correctAnswer:[0,1]},
    {question: '722.In majoritatea cazurilor debutul diabetului zaharat este:',
        choices: [
            'a. insidios',
            'b. atipic',
            'c. brutal'],
        correctAnswer:[0,1]},
    {question: '723.Infectia nozocomiala este :',
        choices: [
            'a. infectia contactata in spital sau alte unitati sanitare cu paturi ;',
            'b. infectia care se refera la orice boala datorata microorganismelor ;',
            'c. infectia dobandita in spital si uneori diagnosticata dupa iesirea din spital.'],
        correctAnswer:[0,2]},
    {question: '724. Atributiile asistentei medicale in prevenirea infectiilor nozocomiale cuprind:',
        choices: [
            'a. respectarea regulilor de tehnica aseptica in efectuarea tratamentelor prescrise;',
            'b. supravegherea mentinerii conditiilor de igiena si a toaletei bolnavilor imobilizati;',
            'c. supravegherea aplicarii tratamentului cu antibiotice in functie de antibiograma si evolutia clinica a bolnavului .'],
        correctAnswer:[0,1]},
    {question: '725.In cadrul Precautiunilor Universale este considerat factorul de risc contactul tegumentelor si mucoaselor cu urmatoarele produse :',
        choices: [
            'a. lichid amniotic, lichid peritoneal, LCR, lichid sinovial;',
            'b. sperma si secretii vaginale;',
            'c. sputa, secretii nazofaringiene .'],
        correctAnswer:[0,1]},
    {question: '726.Regulile de baza in aplicarea Precautiunilor Universale considera:',
        choices: [
            'a. toti pacienti potential infectati;',
            'b. toti pacientii sunt potential sanatosi ;',
            'c. ca acele si alte obiecte folosite in practica medicala sunt contaminate dupa utilizare .'],
        correctAnswer:[0,2]},
    {question: '727. Aplicarea Precautiunilor Universale se refera la :',
        choices: [
            'a. prevenirea accidentelor si a altor tipuri de expunere profesionala ;',
            'b. personalul infectat cu Hbs;',
            'c. utilizarea echipamentului de protectie adecvat, complet, corect.'],
        correctAnswer:[0,2]},
    {question: '728. Echipamentul de protectie este :',
        choices: [
            'a. bariera intre lucrator si sursa de infectie;',
            'b. utilizat in timpul activitatilor care presupun risc de infectie ;',
            'c. alcatuit din halat si incaltaminte de spital .'],
        correctAnswer:[0,1]},
    {question: '729. Spalarea mainilor si a altor parti ale tegumentelor , cel mai important mod de prevenire a contaminarii cu agenti microbieni, se efectueaza :',
        choices: [
            'a. inainte si dupa aplicarea unui tratament pacientilor ;',
            'b. dupa scoaterea manusilor de protectie ;',
            'c. numai la intrarea in serviciu .'],
        correctAnswer:[0,1]},
    {question: '730. Metodele de prevenire a accidentelor profesionale prin taiere, intepare cu obiecte ascutite, constau in :',
        choices: [
            'a. colectarea imediat dupa utilizare in containere rezistente la intepare si taiere, amplasate la indemana si marcate corespunzator ;',
            'b. reducerea de manevre parenterale la minimum necesar;',
            'c. recapisonarea acelor folosite.'],
        correctAnswer:[0,1]},
    {question: '731.Asistenta medicala trebuie sa faca identificarea medicamentelor administrate:',
        choices: [
            'a. la preluarea acestora;',
            'b. inainte de administrare;',
            'c. la externarea pacientului.'],
        correctAnswer:[0,1]},
    {question: '732. Echipametul de protectie este :',
        choices: [
            'a. bariera intre lucrator si sursa de infectie;',
            'b. utilizat in timpul activitatilor care presupun risc de infectie ;',
            'c. alcatuit din halat si incaltaminte de spital .'],
        correctAnswer:[0,1]},
    {question: '733. Spalarea mainilor si a altor parti ale tegumentelor , cel mai important mod de prevenire a contaminarii cu agenti microbieni, se efectueaza :',
        choices: [
            'a. inainte si dupa aplicarea unui tratament pacientilor ;',
            'b. dupa scoaterea manusilor de protectie ;',
            'c. numai la intrarea in serviciu .'],
        correctAnswer:[0,1]},
    {question: '734. Metodele de prevenire a accidentelor profesionale prin taiere, intepare cu obiecte ascutite, constau in :',
        choices: [
            'a. colectarea imediat dupa utilizare in containere rezistente la intepare si taiere, amplasate la indemana si marcate corespunzator ;',
            'b. reducerea de manevre parenterale la minimum necesar;',
            'c. recapisonarea acelor folosite.'],
        correctAnswer:[0,1]},
    {question: '735.In cadrul Precautiunilor Universale este considerat factorul de risc contactul tegumentelor si mucoaselor cu urmatoarele produse :',
        choices: [
            'a. lichid amniotic, lichid peritoneal, LCR, lichid sinovial;',
            'b. sperma si secretii vaginale;',
            'c. sputa, secretii nazofaringiene .'],
        correctAnswer:[0,1]},
    {question: '736.Regulile de baza in aplicarea Precautiunilor Universale considera:',
        choices: [
            'a. toti pacienti potential infectati;',
            'b. toti pacientii sunt potential sanatosi ;',
            'c. ca acele si alte obiecte folosite in practica medicala sunt contaminate dupa utilizare .'],
        correctAnswer:[0,2]},
    {question: '737. Aplicarea Precautiunilor Universale se refera la :',
        choices: [
            'a. prevenirea accidentelor si a altor tipuri de expunere profesionala ;',
            'b. personalul infectat cu Hbs;',
            'c. utilizarea echipamentului de protectie adecvat, complet, corect.'],
        correctAnswer:[0,2]},
    {question: '738. Echipametul de protectie este :',
        choices: [
            'a.bariera intre lucrator si sursa de infectie;',
            'b.utilizat in timpul activitatilor care presupun risc de infectie ;',
            'c.alcatuit din halat si incaltaminte de spital .'],
        correctAnswer:[0,1]},
    {question: '739. Spalarea mainilor si a altor parti ale tegumentelor , cel mai important mod de prevenire a contaminarii cu agenti microbieni, se efectueaza :',
        choices: [
            'a. inainte si dupa aplicarea unui tratament pacientilor ;',
            'b. dupa scoaterea manusilor de protectie ;',
            'c. numai la intrarea in serviciu .'],
        correctAnswer:[0,1]},
    {question: '740. Metodele de prevenire a accidentelor profesionale prin taiere, intepare cu obiecte ascutite, constau in :',
        choices: [
            'a. colectarea imediat dupa utilizare in containere rezistente la intepare si taiere, amplasate la indemana si marcate corespunzator ;',
            'b. reducerea de manevre parenterale la minimum necesar;',
            'c. recapisonarea acelor folosite.'],
        correctAnswer:[0,1]},
    {question: '741. Nerespectarea cailor de administrare a medicamentelor:',
        choices: [
            'a. nu influenteaza intensitatea efectului medicamentelor;',
            'b. are efecte nedorite;',
            'c. duce la complicatii locale la locul de administrare a injectiilor.'],
        correctAnswer:[1,2]},
    {question: '742.Asistenta medicala:',
        choices: [
            'a. este nevoita sa trezeasca bolnavul pentru administrarea medicamentelor simptomatice;',
            'b. trezeste bolnavul pentru administrarea medicamentelor etiologice;',
            'c. stabileste orarul de administrare respectind somnul pacientului.'],
        correctAnswer:[1,2]},
    {question: '743.Asocierea mai multor medicamente in aceeasi seringa:',
        choices: [
            'a. menajeaza bolnavul de intepaturi;',
            'b. duce la transformarea, precipitarea, degradarea acestora;',
            'c. priveste in mod direct medicul.'],
        correctAnswer:[0,1]},
    {question: '744.Cind administreaza tratamentul, asistenta medicala:',
        choices: [
            'a. lasa la pacient intreaga doza zilnica;',
            'b. administreaza personal supozitoarele, picaturile pentru ochi si nas;',
            'c. administreaza intai tabletele, solutiile si picaturile, apoi injectiile.'],
        correctAnswer:[1,2]},
    {question: '745.Asistenta medicala are grija:',
        choices: [
            'a. sa informeze pacientul despre timpul in care se va instala efectul medicamentelor;',
            'b. sa atraga atentia asupra efectelor secundare ale medicamentelor;',
            'c. sa corecteze dozele prescrise.'],
        correctAnswer:[0,1]},
    {question: '746. Regulile generale de pregatire si administrare a injectiilor prevad:',
        choices: [
            'a. injectarea imediata a continutului seringii;',
            'b. verificarea solutiei injectabile;',
            'c. pregatirea cu 30 min. inainte de administrare.'],
        correctAnswer:[0,1]},
    {question: '747. Accidentele survenite la administrarea injectiilor intramusculare sunt:',
        choices: [
            'a. atingerea nervului sciatic si a ramurilor sale;',
            'b. atingerea nervului trigemen si a ramurilor sale;',
            'c. patrunderea cu acul intr-un vas sanguin.'],
        correctAnswer:[0,2]},
    {question: '748.Accidentele survenite in urma injectiei intravenoase sunt:',
        choices: [
            'a. flebalgia;',
            'b. supuratia aseptica;',
            'c. tumefierea brusca a tesutului perivenos, hematom.'],
        correctAnswer:[0,2]},
    {question: '749.La stabilirea antibioticului ce urmeaza a fi administrat trebuie sa se tina seama de anumite reguli:',
        choices: [
            'a. alegerea unui singur antibiotic, cel mai activ si mai putin toxic, pe baza antibiogramei;',
            'b. antibioticul folosit sa expuna cel mai putin la aparitia rezistentei microbiene;',
            'c. asocierea a doua antibiotice pe baza antibiogramei in scopul acoperirii unui spectru cat mai larg de germeni.'],
        correctAnswer:[0,1]},
    {question: '750.Stabilirea diagnosticului de alergie la un antibiotic se bazeaza pe:',
        choices: [
            'a. terenul alergic;',
            'b. calea de administrare ;',
            'c. manifestarile aparute la testele de provocare (cutanate si serologice).'],
        correctAnswer:[0,2]},
    {question: '751. Cu ocazia administrarii antibioticului, asistenta medicala trebuie sa cunoasca :',
        choices: [
            'a. doza totala pe zi de antibiotic ce trebuie administrata unui pacient;',
            'b. durata tratamentului ;',
            'c. cantitatea exacta a unei doze.'],
        correctAnswer:[0,2]},
    {question: '752. Personalul care manevreaza antibiotice poate sa se sensibilizeze fata de aceste substante, fiind expus la:',
        choices: [
            'a. dermite profesionale;',
            'b. soc anafilactic;',
            'c. urticarii.'],
        correctAnswer:[0,2]},
    {question: '753.Gentamicina, Kanamicina au actiune:',
        choices: [
            'a. ototoxica;',
            'b. nefrotoxica;',
            'c. diuretica.'],
        correctAnswer:[0,1]},
    {question: '754.Cantitatile de antibiotice si chimioterapice se exprima intotdeauna in:',
        choices: [
            'a. unitati, grame sau submultipli ai acestora;',
            'b. numar de tablete sau capsule;',
            'c. mililitri de solutie.'],
        correctAnswer:[0,1]},
    {question: '755.Hormonul corticotrop sau adrenocorticotrop hipofizar (ACTH) stimuleaza secretia :',
        choices: [
            'a. cortizonului;',
            'b. cortizonului si a altor hormoni ai glandelor suprarenale.',
            'c. hormonilor glandelor suprarenale cu exceptia cortizonului.'],
        correctAnswer:[0,1]},
    {question: '756. In caz de insuficienta hepatica, tratamentul cu cortizon se face cu:',
        choices: [
            'a. hidrocortizon;',
            'b. prednisolon ;',
            'c. cortizon acetat.'],
        correctAnswer:[0,1]},
    {question: '757.Calcularea dilutiilor atat pentru ACTH, cat si pentru preparatele de cortizon se face:',
        choices: [
            'a. in functie de durata tratamentului;',
            'b. la fel ca in cazul antibioticelor;',
            'c. tinand cont de cantitatea de ACTH exprimata in unitati cuprinsa in fiecare ml. de solutie .'],
        correctAnswer:[1,2]},
    {question: '758.ACTH-ul si cortizonul:',
        choices: [
            'a. retin sodiul in organism ;',
            'b. spoliaza organismul de potasiu, marind eliminarea lui;',
            'c. retin potasiul si spoliaza organismul de sodiu.'],
        correctAnswer:[0,1]},
    {question: '759.Simptomele functionale in insuficienta cardiaca cronica stanga sunt:',
        choices: [
            'a. durerea si transpiratia ;',
            'b. dispneea;',
            'c. tusea.'],
        correctAnswer:[1,2]},
    {question: '760.Semne fizice in insuficienta cardiaca dreapta acuta:',
        choices: [
            'a. turgescenta jugularelor si ritm de galop ;',
            'b. hepatomegalie;',
            'c. edeme declive.'],
        correctAnswer:[0,1]},
    {question: '761. In insuficienta cardiaca tratamentul urmareste :',
        choices: [
            'a. reducerea muncii inimii prin activitate normala;',
            'b. reducerea muncii inimii prin repaus;',
            'c.controlul retentiei hidrosaline prin restrictia aportului de sare.'],
        correctAnswer:[1,2]},
    {question: '762. Tratamentul in insuficienta cardiaca consta in:',
        choices: [
            'a. administrare de cortizon ;',
            'b. administrare de diuretice ;',
            'c. cresterea eficientei inimii cu preparate digitalice.'],
        correctAnswer:[1,2]},
    {question: '763.In functie de cauza determinanta, HTA se clasifica in:',
        choices: [
            'a. HTA medie;',
            'b. HTA esentiala;',
            'c. HTA secundara.'],
        correctAnswer:[1,2]},
    {question: '764.In stadiul al III -lea, HTA se caracterizeaza prin aparitia complicatiilor:',
        choices: [
            'a. complicatii cardiace, coronariene;',
            'b. complicatii cerebrale si renale ;',
            'c.complicatii abdominale.'],
        correctAnswer:[0,1]},
    {question: '765. Modificari fundamentale locale ce stau la baza hipertensiunii sunt :',
        choices: [
            'a. vasoconstrictia arteriala ;',
            'b. cresterea continutului peretelui arteriolar in apa si sare ;',
            'c.vasodilatatia arteriala.'],
        correctAnswer:[0,1]},
    {question: '766. Stadiul prehipertensiv poate fi afirmat pe baza :',
        choices: [
            'a. ascendentei ereditare hipertensive ;',
            'b. aparitia unor puseuri tensionale trecatoare ;',
            'c.fara ascendenta ereditara.'],
        correctAnswer:[0,1]},
    {question: '767.In HTA benigna, complicatiile se datoreaza :',
        choices: [
            'a. trombozei cerebale ;',
            'b. infarctului de mezenter ;',
            'c. infarctului miocardic.'],
        correctAnswer:[0,2]},
    {question: '768 .In HTA maligna se intilnesc frecvent :',
        choices: [
            'a. diabetul zaharat ;',
            'b. encefalopatia hipertensiva si hemoragia cerebrala ;',
            'c. insuficienta cardiaca si insuficienta renala.'],
        correctAnswer:[1,2]},
    {question: '769. Semne cerebrale in HTA maligna sunt:',
        choices: [
            'a. tulburari de comportament ;',
            'b. cefalee occipitala, tulburari de memorie ;',
            'c. oboseala, astenie, insomnie.'],
        correctAnswer:[1,2]},
    {question: '770.Moartea biologica se caracterizeaza prin :',
        choices: [
            'a. oprirea reversibila a respiratiei si a circulatiei;',
            'b. leziuni ireversibile in creier si in alte organe ;',
            'c. midriaza fixa, cornee opaca si aparitia petelor cadaverice.'],
        correctAnswer:[1,2]},
    {question: '771.In cazul unui stop cardio-respirator putem intalni urmatoarele semne clinice:',
        choices: [
            'a. oprirea miscarilor respiratorii, toracice si abdominale;',
            'b. incetarea batailor inimii, absenta pulsului la artera carotida;',
            'c. mioza cu globi oculari mobili.'],
        correctAnswer:[0,1]},
    {question: '772.Semnele obstruarii cailor aeriene sunt:',
        choices: [
            'a. absenta miscarilor respiratorii normale, dispnee zgomotoasa;',
            'b. lipsa curentului de aer la nas sau gura ;',
            'c. torace si abdomen imobile.'],
        correctAnswer:[0,1]},
    {question: '773.La inceputul reanimarii oricarui stop cardio-respirator:',
        choices: [
            'a. se aplica o singura lovitura usoara cu pumnul, de la o inaltime de 20-32 cm, in mijlocul regiunii presternale;',
            'b. se efectueaza masajul cardiac extern combinat cu respiratie artificiala;',
            'c. intubatie oro-traheala.'],
        correctAnswer:[0,1]},
    {question: '774. Eficienta respiratiei artificiale si a masajului cardiac extern se apreciaza prin:',
        choices: [
            'a. aparitia pulsului la vasele mari;',
            'b. disparitia midriazei si recolorarea tegumentului;',
            'c. disparitia miozei .'],
        correctAnswer:[0,1]},
    {question: '775.Contraindicatiile masajului cardiac extern sunt:',
        choices: [
            'a. leziuni grave ale peretelui toracic cu fracturi costale, embolie gazoasa masiva;',
            'b. hemoragie masiva intrapericardica si tamponada inimii;',
            'c. malformatii ale oaselor cutiei toracice.'],
        correctAnswer:[0,1]},
    {question: '776.Edemul pulmonar acut apare prin inundarea brutala a alveolelor:',
        choices: [
            'a. de transudat sanguinolent necoagulabil;',
            'b. datorata ruperii capilarelor pulmonare;',
            'c. provocata de cresterea presiunii sangelui alveolocapilar.'],
        correctAnswer:[0,2]},
    {question: '777. Edemul pulmonar acut este:',
        choices: [
            'a. de natura anafilactica;',
            'b. de natura cardiogena;',
            'c. de natura lezionala.'],
        correctAnswer:[1,2]},
    {question: '778. Edemul pulmonar acut este declansat de :',
        choices: [
            'a. insuficienta ventriculara stanga;',
            'b. hipertensiune arteriala;',
            'c. preinfarctul miocardic.'],
        correctAnswer:[0,1]},
    {question: '779. Edemul pulmonar acut lezional este provocat de :',
        choices: [
            'a. gaze sufocante toxice;',
            'b. cauze neurologice;',
            'c. tulburari de rimt cardiac paroxistice.'],
        correctAnswer:[0,1]},
    {question: '780. Manifestarile clinice in edemul pulmonar acut sunt:',
        choices: [
            'a. dispnee intensa, severa, brusca;',
            'b. expir greu, zgomotos;',
            'c. respiratie polipneica zgomotoasa.'],
        correctAnswer:[0,2]},
    {question: '781 . Conduita de urgenta in edemul pulmonar acut cuprinde:',
        choices: [
            'a. se aspira secretiile si se curata orofaringele;',
            'b. se aplica garouri la radacina a trei membre;',
            'c. oxigenoterapie intermitenta pe sonda endotraheala.'],
        correctAnswer:[0,9]},
    {question: '782 . Tratamentul in edemul pulmonar acut cu TA crescuta este:',
        choices: [
            'a. digitalice;',
            'b. diuretice;',
            'c. dopamina.'],
        correctAnswer:[0,1]},
    {question: '783. In tratamentul edemului pulmonar acut cu TA scazuta sunt contraindicate:',
        choices: [
            'a. morfina;',
            'b. hipotensoare;',
            'c. dopamina.'],
        correctAnswer:[0,1]},
    {question: '784. Tratamentul in edemul pulmonar acut toxic cuprinde :',
        choices: [
            'a. scoaterea pacientului din mediu nociv;',
            'b. oxigenoterapie pe sonda endotraheala;',
            'c. ventilatie artificiala.'],
        correctAnswer:[0,2]},
    {question: '785. Tratamentul in edemul pulmonar acut bacterian este:',
        choices: [
            'a. morfina, corticoterapie;',
            'b. antibiotice, tonicardiace;',
            'c. oxigenoterapie.'],
        correctAnswer:[1,2]},
    {question: '786. Tratamentul in edemul pulmonar acut neurologic este:',
        choices: [
            'a. sangerare 300-500 ml ;',
            'b. diureza osmotica;',
            'c. anticoagulante.'],
        correctAnswer:[0,1]},
    {question: '787. Tratamentul in edemul pulmonar acut la inecati cu apa de mare este:',
        choices: [
            'a. sangerare 300-500 ml;',
            'b. dextran 70;',
            'c. oxigenoterapie.'],
        correctAnswer:[1,2]},
    {question: '788. Tratamentul edemului pulmonar acut la bolnavii uremici este:',
        choices: [
            'a. oxigenoterapie;',
            'b. aerosoli antispumanti;',
            'c. morfina.'],
        correctAnswer:[0,1]},
    {question: '789. Clasificarea EPA lezional este:',
        choices: [
            'a. de cauze toxice;',
            'b. de cauze uremice;',
            'c. cardiogen.'],
        correctAnswer:[0,1]},
    {question: '790 . Edemul pulmonar acut de cauza toxica este provocat de :',
        choices: [
            'a. intoxicatii cu CO;',
            'b. intoxicatii organo-fosforice;',
            'c. intoxicatii cu plumb.'],
        correctAnswer:[0,1]},
    {question: '791 . Edemul pulmonar acut infectios este provocat de :',
        choices: [
            'a. gripa;',
            'b. infectii pulmonare;',
            'c. SIDA.'],
        correctAnswer:[0,1]},
    {question: '792 . Edemul pulmonar acut de deglutitie apare la :',
        choices: [
            'a. comatosi;',
            'b. paraplegici;',
            'c. copii mici.'],
        correctAnswer:[0,1]},
    {question: '793 . Edemul pulmonar acut iatrogen este provocat de :',
        choices: [
            'a. perfuzii;',
            'b. transfuzii;',
            'c. alimentatie neadecvata.'],
        correctAnswer:[0,1]},
    {question: '794 . In ce forma de EPA este contraindicata morfina:',
        choices: [
            'a. EPA cardiogen;',
            'b. EPA uremic;',
            'c. EPA infectios.'],
        correctAnswer:[1,2]},
    {question: '795 . Oxigenoterapia in EPA este:',
        choices: [
            'a. contraindicata, deoarece creste presiunea in alveole;',
            'b. se practica pe respiratie asistata;',
            'c. se administreaza numai dupa umidificare .'],
        correctAnswer:[1,2]},
    {question: '796. La pacientul cu insuficienta renala acuta este contraindicata:',
        choices: [
            'a. fortarea diurezei prin administrarea de lichide abundente;',
            'b. corectarea dezechilibrului electrolitic fara rezultate de laborator;',
            'c. combaterea varsaturilor .'],
        correctAnswer:[0,1]},
    {question: '797 . In insuficienta renala acuta diureza este :',
        choices: [
            'a. sub 400ml urina/zi;',
            'b. sub 50ml urina/zi;',
            'c. peste 1000ml urina/zi.'],
        correctAnswer:[0,1]},
    {question: '798. In insuficienta renala acuta calea de administrare si compozitia lichidelor in vederea mentinerii echilibrului hidroelectrolitic vor fi stabilite:',
        choices: [
            'a. in functie de ionograma;',
            'b. de catre medic ;',
            'c. in functie de examenul sumar de urina.'],
        correctAnswer:[0,1]},
    {question: '799.Interventiile asistentei medicale la un pacient cu insuficienta renala acuta constau in:',
        choices: [
            'a. efectuarea bilantului hidric;',
            'b. diminuarea catabolismului proteic prin epurare extrarenala hemodializata si dializa peritoneala;',
            'c. aplicatii calde in regiunea lombara .'],
        correctAnswer:[0,1]},
    {question: '800. Care dintre urmatoarele afectiuni reprezinta cauze postrenale in producerea insuficientei renale acute?',
        choices: [
            'a. calculoza ureterala bilaterala;',
            'b. tumorile de vecinatate afectand ambele uretere;',
            'c. glomerulonefrita.'],
        correctAnswer:[0,1]},
    {question: '801 .In cazurile in care in insuficienta renala acuta diureza este pastrata, deficitul calitativ consta in:',
        choices: [
            'a. hematurie;',
            'b. izostenurie;',
            'c. hipostenurie.'],
        correctAnswer:[1,2]},
    {question: '802. Suprimarea functiei renale in insuficienta renala acuta survine ca urmare a:',
        choices: [
            'a. reducerii filtratului glomerular;',
            'b. scaderii reabsorbtiei tubulare ;',
            'c. reducerii permeabilitatii glomerulare.'],
        correctAnswer:[0,2]},
    {question: '803 .Care dintre urmatoarele tulburari cardio-vasculare apare in insuficienta renala acuta?',
        choices: [
            'a. tahicardie;',
            'b. aritmii;',
            'c. bradicardie;'],
        correctAnswer:[0,1]},
    {question: '804 .In insuficienta renala acuta cresc proportional cu agravarea functiei renale:',
        choices: [
            'a. calcemia;',
            'b. acidul uric;',
            'c. uree sangvina.'],
        correctAnswer:[1,2]},
    {question: '805 .Care dintre urmatoarele manifestari sunt semnificative pentru o insuficienta renala acuta?',
        choices: [
            'a. oligo-anuria;',
            'b. alterarea echilibrului hidroelectrolitic si acido-bazic;',
            'c. hematuria.'],
        correctAnswer:[0,1]},
    {question: '806 .Insuficienta renala cronica se caracterizeaza prin:',
        choices: [
            'a. deteriorarea rapida a functiei renale de excretie ;',
            'b. scaderea progresiva a capacitatii functionale renale;',
            'c. retinerea in organism a substantelor toxice rezultate din metabolism.'],
        correctAnswer:[1,2]},
    {question: '807.In care dintre urmatoarele tulburari metabolice se intalnesc in insuficienta renala',
        choices: [
            'a. hipolipidemie ;',
            'b. hiperlipidemie ;',
            'c. hiperlipoproteinemie.'],
        correctAnswer:[1,2]},
    {question: '808.Insuficienta renala cronica este o boala provocata de :',
        choices: [
            'a. insuficienta cardiaca acuta ;',
            'b. glomerulonefrita cronica ;',
            'c. obstructia cailor urinare.'],
        correctAnswer:[1,2]},
    {question: '809.Dintre cele mai periculoase complicatii ale insuficientei renale cronice fac parte :',
        choices: [
            'a. edemul pulmonar ;',
            'b. diabetul ;',
            'c. edemul cerebral.'],
        correctAnswer:[0,2]},
    {question: '810.Care dintre urmatoarele manifestari sunt semnificative pentru insuficienta renala cronica ?',
        choices: [
            'a. cefalee precoce, contractii musculare, stari confuzionale ;',
            'b. stare generala profund alterata, miros amoniacal al aerului expirat, intoleranta digestiva ;',
            'c. stare generala alterata, toleranta digestiva, dispnee, somnolenta.'],
        correctAnswer:[0,9]},
    {question: '811.Interventiile asistentei medicale in insuficienta renala cronica este un element important al activitatii medicale. Educarea pacientilor se refera la :',
        choices: [
            'a. exercitii fizice intense, sustinute ;',
            'b. necesitatea restrictiilor alimentare ;',
            'c. igiena riguroasa a tegumentelor .'],
        correctAnswer:[1,9]},
    {question: '812.Problemele pacientului cu insuficienta renala cronica pot fi :',
        choices: [
            'a. alterarea echilibrului acido-bazic prin degradarea functiei tubulare ;',
            'b. alterarea integritatii pielii ;',
            'c. insomnia .'],
        correctAnswer:[0,9]},
    {question: '813.Corectarea dezechilibrelor hidro-electrolitice si acido-bazice in I.R.A. se face cu :',
        choices: [
            'a. bicarbonat de sodiu in acidoza metabolica ;',
            'b. clorura de sodiu in deshidratarea extracelulara ;',
            'c. diuretice in deshidratarea extracelulara .'],
        correctAnswer:[0,9]},
    {question: '814.Etiopatogenia litiazei renale este reprezentata de :',
        choices: [
            'a. prezenta in urina a unor coloizi protectori care sa impiedice cristalizarea;',
            'b. conditii fizico-chimice care favorizeaza cristalizarea (oligurie, staza urinara);',
            'c. prezenta in urina, in exces, a unor substante care pot cristaliza (acid uric, acid oxalic, fosfati, calciu).'],
        correctAnswer:[1,9]},
    {question: '815.Evolutia in litiaza renala depinde de urmatorii factori:',
        choices: [
            'a. compozitia calculului, regimul alimentar;',
            'b. numarul si marimea calculilor, obstructia cailor urinare;',
            'c. aparitia infectiei.'],
        correctAnswer:[1,9]},
    {question: '816.Cele mai frecvente complicatii ale litiazei renale sunt:',
        choices: [
            'a. anuria, infectia urinara;',
            'b. hidronefroza;',
            'c. malformatia cailor urinare.'],
        correctAnswer:[0,1]},
    {question: '817.Indicatiile tratamentului chirurgical in litiaza renala sunt:',
        choices: [
            'a. la aparitia infectiei urinare sau cand calculii ureterali nu se elimina mult timp;',
            'b. atunci cand este afectata functia renala si tratamentul medical nu da rezultate;',
            'c. la producerea unei recidive.'],
        correctAnswer:[0,1]},
    {question: '818.Litiaza renala se defineste ca fiind:',
        choices: [
            'a. afectiunea caracterizata prin formarea unor calculi in bazinet si in caile urinare;',
            'b. afectiunea caracterizata prin formarea unor calculi in bazinet si in caile biliare;',
            'c. afectiunea caracterizata prin formarea unor calculi in bazinet si vezica urinara.'],
        correctAnswer:[0,2]},
    {question: '819.In tratamentul litiazei renale se va tine seama obligatoriu de:',
        choices: [
            'a. manifestarea acuta;',
            'b. boala de baza;',
            'c. numarul calculilor renali.'],
        correctAnswer:[0,1]},
    {question: '820 .Conduita de urgenta la pacientul in stare de colica renala consta in administrarea de:',
        choices: [
            'a. ceaiuri diuretice si ape minerale 2000 - 3000 ml/24 ore ;',
            'b. analgezice antispastice, la indicatia medicului ;',
            'c. antiinflamatoare.'],
        correctAnswer:[0,1]},
    {question: '821 .In colica renala, principalele semne sunt :',
        choices: [
            'a. durere, disurie, hematurie, meteorism ;',
            'b. hipertensiune, poliurie, durere, anxietate;',
            'c. durere, neliniste, tenesme vezicale, varsaturi, uneori febra moderata .'],
        correctAnswer:[0,2]},
    {question: '822 .In colica renala, tratamentul de urgenta este:',
        choices: [
            'a. repaus la pat, calmarea durerii;',
            'b. sonda uretro-vezicala, combaterea durerii;',
            'c. repaus la pat, ingerarea de lichide din abundenta.'],
        correctAnswer:[0,2]},
    {question: '823 .Colica renala este :',
        choices: [
            'a. un sindrom dureros acut, paroxistic, de obicei apiretic;',
            'b. un sindrom provocat de spasmul cailor urinare excretoare superioare, insotit de agitatie si iradieri uretero-vezico-genitale;',
            'c. imposibilitatea evacuarii vezicii urinare .'],
        correctAnswer:[0,1]},
    {question: '824. Interventiile asistentei medicale pentru calmarea durerii in colica renala, sunt :',
        choices: [
            'a. aplicatii locale de caldura pe zona de maxima durere;',
            'b. aplicarea alternativa de comprese reci si calde in regiunea lombara;',
            'c. administrarea de analgezice-antispastice la indicatia medicului .'],
        correctAnswer:[0,2]},
    {question: '825 .In colica renala examinarile de urgenta sunt :',
        choices: [
            'a. examen complet de urina ;',
            'b. radiografie renala pe gol;',
            'c. urografie .'],
        correctAnswer:[0,1]},
    {question: '826 .Socul este definit ca:',
        choices: [
            'a. grava tulburare functionala a intregului organism;',
            'b. suferinta grava a creierului cu conservarea partiala a functiilor vitale;',
            'c. reactie organica post-agresiva decompensata.'],
        correctAnswer:[0,2]},
    {question: '827 .Obiectivul principal al tratamentului in soc este:',
        choices: [
            'a. combaterea insuficientei cardiovasculare;',
            'b. restabilirea perfuziei organice a tesuturilor;',
            'c. combaterea hipoxiei cerebrale.'],
        correctAnswer:[1,2]},
    {question: '828.Clasificarea etiologica a socului este urmatoarea:',
        choices: [
            'a. hipovolemic, cardiogen, toxico- septic, anafilactic, neurogen;',
            'b. cardiogen, hemoragic, septicemic, toxic, anafilactic, psihogen;',
            'c. hipovolemic, cardiogen, neurogen, infectios, anafilactic.'],
        correctAnswer:[0,2]},
    {question: '829 .Care dintre urmatoarele semne nu fac parte din tabloul clinic al socului:',
        choices: [
            'a. bradipnee superficiala;',
            'b. hipertermia;',
            'c. facies palid, buze uscate si cianotice.'],
        correctAnswer:[0,1]},
    {question: '830 . Socul traumatic compensat asimptomatic si nemanifest clinic este caracterizat prin:',
        choices: [
            'a. echilibru biologic care impiedica aparitia socului decompensat;',
            'b. faza imediat postagresiva;',
            'c. perioada in care nu se face tratament antisoc.'],
        correctAnswer:[0,1]},
    {question: '831 .Conduita de urgenta in socul traumatic cuprinde :',
        choices: [
            'a. inlaturarea factorului socogen;',
            'b. combaterea durerii;',
            'c. evaluarea rapida a leziunilor.'],
        correctAnswer:[0,2]},
    {question: '832 . Pretratamentul socului se aplica:',
        choices: [
            'a. la locul accidentului si pe timpul transportului ;',
            'b. numai in unitati U.P.U si T.I. ;',
            'c. imediat dupa agresiune, cand nu se manifesta semne de gravitate;'],
        correctAnswer:[0,2]},
    {question: '833 . Refacerea volemiei in socul traumatic se face cu :',
        choices: [
            'a. Dextran 70 cu timp de injumatatire 8-12 ore;',
            'b. Dextran 40 cu timp de injumatatire 6-8 ore ;',
            'c. preparate de gelatina.'],
        correctAnswer:[0,9]},
    {question: '834 .Punctionarea unei vene cu ac de mare calibru este un gest de mare urgenta deoarece :',
        choices: [
            'a. scade tensiunea venoasa prin hemoragie masiva ;',
            'b. este necesara mentinerea unei cai venoase libere ;',
            'c. in etapa decompensata a socului venele se colabeaza si se punctioneaza greu.'],
        correctAnswer:[1,2]},
    {question: '835. Terapia analgetica in soc :',
        choices: [
            'a. sedeaza bolnavul ;',
            'b. inlatura frica si agitatia ;',
            'c. nu preintampina decompensarea socului.'],
        correctAnswer:[0,1]},
    {question: '836 . Socul septic este provocat indeosebi de :',
        choices: [
            'a. preexistenta altor leziuni ;',
            'b. stafilococi, enterococi ;',
            'c. Neisserii, Clostridium.'],
        correctAnswer:[1,2]},
    {question: '837. Stadiul I al socului septic se caracterizeaza prin :',
        choices: [
            'a. hipertermie, hipotensiune arteriala, tahicardie, tahipnee, anxietate;',
            'b. hipotermie, prabusirea tensiunii arteriale, tulburari metabolice,cianoza;',
            'c. soc hiperdinamic, compensat, tegument uscat si cald.'],
        correctAnswer:[0,2]},
    {question: '838 .Instrumentele cele mai frecvent utilizate in sfera O.RL. sunt:',
        choices: [
            'a. oglinda frontala, specule nazale, specule auriculare, stilete;',
            'b. apasatoare de limba, pense cudate, diapazon, seringa Guyon;',
            'c. tub Kehr, trocar, canula de aspiratie cu apasator perforat.'],
        correctAnswer:[0,1]},
    {question: '839. Condro-pericondrita se caracterizeaza prin:',
        choices: [
            'a. insomnie, cefalee, febra, frison;',
            'b. fatigabilitate, acufene, pirozis;',
            'c. inrosirea si tumefierea accentuata a pavilionului si a conductului auditiv, durere, stare generala alterata.'],
        correctAnswer:[0,2]},
    {question: '840. Tratamentul otitei medii acute supurate consta in:',
        choices: [
            'a. chiuretarea portiunilor de cartilaj necrozat;',
            'b. instilatii auriculare cu glicerina boricata 3% sau Boramid;',
            'c. antibioterapie, vitaminoterapie.'],
        correctAnswer:[1,2]},
    {question: '841 .Agentul microbian care declanseaza otomastoidita supurata acuta este:',
        choices: [
            'a. Escherichia colli;',
            'b. Haemophilus influentzae;',
            'c. Stafilococul.'],
        correctAnswer:[1,2]},
    {question: '842 .Principalele complicatii ale mastoiditei acute sunt:',
        choices: [
            'a. osteomielita temporala/occipitala;',
            'b. paralizia nervului facial;',
            'c. angina Ludwig.'],
        correctAnswer:[0,1]},
    {question: '843 .Otomastoidita supurata acuta se caracterizeaza prin:',
        choices: [
            'a. disfonie, disfagie, dispnee, fotofobie;',
            'b. leucocitoza ridicata, frison, hipoacuzie;',
            'c. torticolis, paralizii ale nervului facial, febra.'],
        correctAnswer:[1,2]},
    {question: '844 .Tratamentul osteoflegmonului consta in :',
        choices: [
            'a. tratament medicamentos;',
            'b. timpanotomie;',
            'c. antromastoidectomie.'],
        correctAnswer:[1,2]},
    {question: '845. Sinuzita incorect tratata poate da complicatii ca:',
        choices: [
            'a. epistaxis, sindrom Meniere, labirintita;',
            'b. osteoperiostite, abcese extradurale;',
            'c. meningite, tromboflebite ale sinusurilor cavernos, septicemie.'],
        correctAnswer:[1,2]},
    {question: '846. Germenii microbieni care determina sinuzitele sunt:',
        choices: [
            'a. pneumococul, streptococul;',
            'b. stafilococul;',
            'c. Escherichia Colli, Proteus.'],
        correctAnswer:[1,2]},
    {question: '847. Simptomele sinuzitelor supurate acute sunt:',
        choices: [
            'a. durerea, tulburari ale mirosului, vertije;',
            'b. disfagie, odinofagie, tumefactie la nivelul sinusurilor;',
            'c. respiratie dificila, febra de tip inflamator-supurativ.'],
        correctAnswer:[0,2]},
    {question: '848 .Conjunctivita acuta se manifesta prin:',
        choices: [
            'a. hiperemia vaselor conjunctivale si secretie conjunctivala care se aduna in unghiul intern al ochiului;',
            'b. inflamatia glandei Meibomius;',
            'c. senzatie de arsura si usturime, de corp strain in ochi.'],
        correctAnswer:[1,2]},
    {question: '849 .Simptome pe care le intalnim in keratita herpetica:',
        choices: [
            'a. debut brusc, usturime locala, senzatie de corp strain, lacrimare intensa;',
            'b. frisoane, hipotensiune, puls filiform;',
            'c. ulceratie corneana cu aspect dendritic, neregular.'],
        correctAnswer:[0,2]},
    {question: '850. Atitudinea de urgenta in arsurile oculare:',
        choices: [
            'a. neutralizarea agentului caustic si administrarea unui calmant;',
            'b. administrarea locala si generala de antibiotice, antiinflamatorii;',
            'c. administrarea de miotice.'],
        correctAnswer:[0,1]},
    {question: '851.O infectie oculara se poate recunoaste prin:',
        choices: [
            'a. secretia purulenta la nivelul conjunctivei si a tesuturilor adiacente;',
            'b. durerea, eritemul conjunctival sau periocular;',
            'c. scaderea acuitatii vizuale.'],
        correctAnswer:[0,1]},
    {question: '852.Analizele hematologice cuprind determinarea :',
        choices: [
            'a. numarului de hematii ;',
            'b. vitezei de sedimentare a hematiilor;',
            'c. agentilor patogeni prezenti in sange.'],
        correctAnswer:[0,1]},
    {question: '853.Numarul de hematii poate fi crescut in urmatoarele afectiuni:',
        choices: [
            'a. poliglobulie esentiala;',
            'b. soc septic si alergic;',
            'c. scleroze pulmonare.'],
        correctAnswer:[0,2]},
    {question: '854. Densitatea urinei poate scadea sub 1015 in urmatoarele situatii:',
        choices: [
            'a. soc hemoragic si traumatic;',
            'b. aport mare de lichide: bere, apa;',
            'c. diabet zaharat, diabet insipid.'],
        correctAnswer:[1,2]},
    {question: '855.Oliguria si anuria pot aparea in urmatoarele afectiuni:',
        choices: [
            'a. diabet insipid;',
            'b. insuficienta renala acuta ;',
            'c. soc cu hipovolemie si hipotensiune.'],
        correctAnswer:[1,2]},
    {question: '856. Scaderea indicelui Tiffeneau cu capacitate vitala normala intalnim in:',
        choices: [
            'a. fibroza pulmonara;',
            'b. astm;',
            'c. disfunctie ventilatorie obstructive.'],
        correctAnswer:[1,2]},
    {question: '857.Irigografia poate evidentia:',
        choices: [
            'a. dinamica colica;',
            'b. cancer de colon, polipoza colica;',
            'c. diverticuli colici, boala Crohn.'],
        correctAnswer:[1,2]},
    {question: '858.Efectuarea colecistocolangiografiei are urmatoarele contraindicatii :',
        choices: [
            'a. icter cu bilirubinemie ce depaseste 2,5 mg%;',
            'b. chist hidatic hepatic;',
            'c. intoleranta la iod, hipertiroidism.'],
        correctAnswer:[0,2]},
    {question: '859. Ecografia abdominala are ca scop:',
        choices: [
            'a. urmarirea in timp a unor aspecte patologice, inlocuind metode mai putin agreabile (colangiografia, arteriografia);',
            'b. precizarea diagnosticului unor afectiuni ale tubului digestiv;',
            'c. stabilirea naturii chistice sau solide a unor formatiuni tumorale abdominale, palpabile.'],
        correctAnswer:[0,2]},
    {question: '860 .Urografia intravenoasa se poate executa atunci cand:',
        choices: [
            'a. bolnavul are TBC renal;',
            'b. densitatea urinei este sub 1015;',
            'c. urea depaseste 70 mg%.'],
        correctAnswer:[1,2]},
    {question: '861. Ureteropielografia retrograda si pielografia ascendenta ne dau informatii referitor la:',
        choices: [
            'a. existenta hidronefrozei, tumorilor renale, stricturilor ureterale;',
            'b. prezenta de tumori si calculi vezicali;',
            'c. anomalii congenitale ale ureterelor si rinichilor.'],
        correctAnswer:[0,2]},
    {question: '862 . Nodulii reci tiroidieni pot fi dati de:',
        choices: [
            'a. cancer tiroidian;',
            'b. chist tiroidian;',
            'c. adenom toxic tiroidian.'],
        correctAnswer:[0,1]},
    {question: '863. Dintre afectiunile de mai jos, pot duce la denutritie, necesitand un tratament preoperator pentru combaterea acesteia:',
        choices: [
            'a. bolnavii cancerosi in stadiul I;',
            'b. stenozele esofagiene postcaustice si tumorale;',
            'c. stenoza pilorica, fistule digestive.'],
        correctAnswer:[1,2]},
    {question: '864. In cazul in care este greu sau imposibil de acorectat denutritia, se procedeaza la:',
        choices: [
            'a. regim alimentar hipercaloric si apoi interventie chirurgicala;',
            'b. transfuzie de sange total, interventie chirurgicala pentru inlaturarea afectiunii cauzale;',
            'c. aducerea la normal a starii de denutritie postoperator.'],
        correctAnswer:[1,2]},
    {question: '865. Deosebirea dintre anemia acuta si cea cronica este:',
        choices: [
            'a. anemia acuta se produce prin pierdere importanta de sange intr-un timp scurt;',
            'b. ambele se produc prin pierdere de sange;',
            'c. anemia cronica apare cand pierderea de sange este in timp.'],
        correctAnswer:[0,2]},
    {question: '866. In pregatirea preoperatorie a unui bolnav pulmonar ce urmeaza a suferi o interventie pe alt organ, se va urmari:',
        choices: [
            'a. oprirea sau rarirea tusei;',
            'b. uscarea completa a secretiilor;',
            'c. reducerea secretiilor sub 50ml/24 ore.'],
        correctAnswer:[0,2]},
    {question: '867. La un bolnav renal urmeaza a fi corectata preoperator urmatoarele deficiente:',
        choices: [
            'a. hipotensiunea arteriala;',
            'b. dezechilibrul hidroelectrolitic si acido- bazic;',
            'c. hipoproteinemia, edemele si H.T.A secundara.'],
        correctAnswer:[1,2]},
    {question: '868. Durerea postoperatorie trebuie tratata in functie de:',
        choices: [
            'a. intensitate;',
            'b. tipul de operatie;',
            'c. durata.'],
        correctAnswer:[0,1]},
    {question: '869. Intensitatea maxima a durerii postoperatorii apare in:',
        choices: [
            'a. primele 2 ore;',
            'b. primele 24 ore;',
            'c. primele 3 zile.'],
        correctAnswer:[0,1]},
    {question: '870 .Pentru calmarea durerii se recurge la:',
        choices: [
            'a. mobilizare imediata ;',
            'b. linistirea bolnavului;',
            'c. asezarea lui in pozitii de menajare a partilor dureroase.'],
        correctAnswer:[1,2]},
    {question: '871 .Tratamentul general in evisceratii consta in :',
        choices: [
            'a. antibioterapie, aspiratie gastrica;',
            'b. punga cu gheata pe abdomen;',
            'c. reechilibrare hidroelectrolitica.'],
        correctAnswer:[0,2]},
    {question: '872 .Tratamentul profilactic al infectiilor urinare in postoperator consta in:',
        choices: [
            'a. aplicarea sondei vezicale la toti bolnavii indiferent de tipul operatiei;',
            'b. aplicarea sondei vezicale in conditii de asepsie perfecta;',
            'c. in perspectiva sondajelor repetate se va prefera sonda a demeure.'],
        correctAnswer:[1,9]},
    {question: '873.Tratamentul chirurgical in stadiul de colectie al abcesului fesier consta in :',
        choices: [
            'a. incizie larga in partea cea mai decliva a colectiei;',
            'b. sutura partiala a inciziei pentru efectuarea hemostazei;',
            'c. evacuarea puroiului, desfiintarea fundurilor de sac, spalarea cu apa oxigenata, drenaj, pansament.'],
        correctAnswer:[0,2]},
    {question: '874 .In postoperator atelectazia pulmonara se combate prin:',
        choices: [
            'a. asezarea bolnavului in pozitie Trendelenburg;',
            'b. mobilizarea precoce a bolnavului, aspiratia secretiilor;',
            'c. tuse comandata, suprimarea durerii, aerosoli.'],
        correctAnswer:[1,2]},
    {question: '875 .Tratamentul preventiv al bolii troboembolice este:',
        choices: [
            'a. mobilizare precoce si imediat ce este posibil miscarea bolnavului pe propriile picioare;',
            'b. gimnastica respiratorie;',
            'c. schimbarea pozitiei si miscari pasive in cazul imobilizarii la pat timp mai indelungat.'],
        correctAnswer:[0,2]},
    {question: '876 .Pentru prevenirea infarctului miocardic postoperator se iau urmatoarele masuri :',
        choices: [
            'a. executarea EKG la bolnavii chirurgicali care depasesc 45-50 de ani;',
            'b. pregatirea preoperatorie corespunzatoarea bolnavilor cu cardiopatie ischemica, hipertensivi, diabetici, obezi;',
            'c. evitarea operatiilor de lunga durata.'],
        correctAnswer:[0,1]},
    {question: '877. Tratarea sughitului se face prin:',
        choices: [
            'a. infiltrarea nervilor frenici cu novocaina;',
            'b. administrare de mialgin si algocalmin;',
            'c. administrare pe sonda nazala a unui amestec de 5%CO2 si 95%O2 cite 5 minute pe ora.'],
        correctAnswer:[0,2]},
    {question: '878.Combaterea ileusului paralitic in postoperator se face prin:',
        choices: [
            'a. aspiratie gastrica;',
            'b. administrare de sedative centrale;',
            'c. corectarea tulburarilor hidroelectrolitice.'],
        correctAnswer:[0,2]},
    {question: '879 .Printre interventiile efectuate in prima faza postoperatorie a tulburarilor respiratorii sunt si:',
        choices: [
            'a. stimularea expectoratiei;',
            'b. aplicarea de pipa orofaringiana;',
            'c. monitorizare E.C.G.'],
        correctAnswer:[0,9]},
    {question: '880 .Postoperator, starea confuzionala are ca manifestari:',
        choices: [
            'a. hipertermie;',
            'b. agitatie;',
            'c. somnolenta.'],
        correctAnswer:[1,2]},
    {question: '881 .Recuperarea starii confuzionale postoperatorii consta in:',
        choices: [
            'a. interzicerea consumului de alcool;',
            'b. mobilizare;',
            'c. monitorizarea functiilor vitale.'],
        correctAnswer:[0,1]},
    {question: '882 . Obiectivele ingrijirii unei plagi sunt:',
        choices: [
            'a. suprimarea durerii;',
            'b. aseptizarea plagii;',
            'c. localizarea plagii.'],
        correctAnswer:[0,1]},
    {question: '883. La efectuarea pansamentului unei plagi, asistenta trebuie sa cunoasca:',
        choices: [
            'a. caracterul durerii;',
            'b. stadiul de inflamare;',
            'c. starea nutritionala a pacientului.'],
        correctAnswer:[1,2]},
    {question: '884 .Pentru a preveni caderea tuburilor de dren in cavitatea abdominala sau toracica se va proceda astfel:',
        choices: [
            'a. se fixeaza cu leucoplast;',
            'b. se ancoreaza tubul de dren cu un fir la pielea bolnavului la sfirsitul operatiei;',
            'c. scurtarea tubului, se va aplica pe tub un ac de siguranta.'],
        correctAnswer:[1,2]},
    {question: '885.Aspiratia continua a secretiilor care se evacueaza prin tubul de dren se efectueaza in urmatoarele operatii:',
        choices: [
            'a. rezectia gastrica;',
            'b. operatii ce se executa in cavitatea toracica;',
            'c. amputatia de mamela.'],
        correctAnswer:[1,2]},
    {question: '886.Masurile adoptate pentru tulburarile de mictiune postoperatorii sunt:',
        choices: [
            'a. introducerea tubului de gaze;',
            'b. masarea zonelor reflexogene;',
            'c. stimulare medicamentoasa'],
        correctAnswer:[1,2]},
    {question: '887 .Dupa operatia pe colon, peristaltica va fi stimulata prin:',
        choices: [
            'a. administrare de ulei de ricin 15 - 20 grame in 2 prize zilnic, din prima zi dupa operatie;',
            'b. clisma zilnic;',
            'c. dilatatie anala facuta la sfirsitul inteventiei chirurgicale'],
        correctAnswer:[0,2]},
    {question: '888 Pentru puctionarea unei vene, garoul se strange pana cand:',
        choices: [
            'a. pulsul radial ramane perceptibil;',
            'b. pulsul nu se mai simte;',
            'c. circulatia venoasa se opreste complet.'],
        correctAnswer:[0,2]},
    {question: '889 . Apa oxigenata este un antiseptic eficace in cadrul plagilor:',
        choices: [
            'a. infectate;',
            'b. intinse;',
            'c. necrotice.'],
        correctAnswer:[0,1]},
    {question: '890 . In cadrul abdomenului acut chirurgical netraumatic, afectiunile care evolueaza catre stare de soc grav sunt:',
        choices: [
            'a. infarctul intestinal si torsiunile de organe;',
            'b. pancreatita acuta necrotica;',
            'c. apendicita cronica.'],
        correctAnswer:[0,1]},
    {question: '891 . Utilizate ca mijloace terapeutice ajutatoare in insuficienta respiratorie acuta avem:',
        choices: [
            'a. spalatura gastrica',
            'b. evacuarea revarsatelor pleurale',
            'c. evacuarea revarsatelor peritonale'],
        correctAnswer:[1,2]},
    {question: '892 . Sediul si natura obstructiei din insuficienta respiratorie acuta se determina prin',
        choices: [
            'a. radiografie toracica',
            'b. laringoscopie',
            'c. branboscopie'],
        correctAnswer:[1,2]},
    {question: '893 . Bronsita cronica realizeaza tabloul de BPOC impreuna cu:',
        choices: [
            'a. stenoza aortica',
            'b. astm bronsic',
            'c. emfizem pulmonar'],
        correctAnswer:[1,2]},
    {question: '894 .Bacilul tuberculos este sensibil la',
        choices: [
            'a. ultraviolete si lumina solara',
            'b. caldura si fierbere',
            'c. uscaciune si frig'],
        correctAnswer:[0,1]},
    {question: '895 .Bacilul tuberculos este rezistent la',
        choices: [
            'a. ultraviolete',
            'b. uscaciune',
            'c. frig'],
        correctAnswer:[1,2]},
    {question: '896 .Pentru dezinfectarea produselor patologice - ce contin bacil Koch se foloseste',
        choices: [
            'a. formol 5%',
            'b. clor',
            'c. acid fenic 5%'],
        correctAnswer:[0,2]},
    {question: '897.Leziunile din tuberculoza sunt',
        choices: [
            'a. exudative',
            'b. productive',
            'c. scoamoase'],
        correctAnswer:[0,1]},
    {question: '898 .Alergia la tuberculina se manifesta prin',
        choices: [
            'a. reactii locale si focale',
            'b. reactii generale',
            'c. reactii unilaterale'],
        correctAnswer:[0,1]},
    {question: '899 .Riscul de a contacta tuberculoza este mai crescut la',
        choices: [
            'a. maturitate',
            'b. intre 0 si 3 ani',
            'c. la pubertate , adolescenta'],
        correctAnswer:[0,2]},
    {question: '900 . Vom spune ca tuberculoza este evolutiva cand:',
        choices: [
            'a. leziunile radiologice sunt stabilizate',
            'b. bacilul Koch se gaseste in expectoratie',
            'c. imaginile radiologice se modifica'],
        correctAnswer:[1,2]},
    {question: '901 . Avem tuberculoza stabilizata cand',
        choices: [
            'a. leziunile radiologice sunt stabile',
            'b. sputele nu contine bacilul Koch',
            'c. sputele contin bacil Koch'],
        correctAnswer:[0,1]},
    {question: '902.Profilaxia in tuberculoza are ca obiective',
        choices: [
            'a. intarirea rezistentei specifice',
            'b. intradermoreactia',
            'c. lupta in focar'],
        correctAnswer:[0,2]},
    {question: '903. Educatia sanitara se adreseaza',
        choices: [
            'a. personalului medical',
            'b. bolnavilor',
            'c. intregii populatii'],
        correctAnswer:[1,2]},
    {question: '904 .Regimul alimentar in tuberculoza trebuie sa fie',
        choices: [
            'a. bogat in proteine si vitamine',
            'b. bogat in grasimi',
            'c. un aport de 3500-4000 calorii'],
        correctAnswer:[0,2]},
    {question: '905. Care sunt reactiile adverse la rifampicina:',
        choices: [
            'a. tulburari digestive , icter',
            'b. reactii alergice , leucopenie',
            'c. reactie Steven -Johnson'],
        correctAnswer:[0,1]},
    {question: '906 .Complicatiile tuberculozei pulmonare sunt',
        choices: [
            'a. ocluzia intestinala',
            'b. pleurezia purulenta',
            'c. pneumotoraxul spontan'],
        correctAnswer:[1,2]},
    {question: '907 .Elementele diagnosticului de tuberculoza sunt',
        choices: [
            'a. virajul la tuberculina',
            'b. aspectul facial',
            'c. aspectul radiologic si depistarea agentului causal'],
        correctAnswer:[0,2]},
    {question: '908 . Bronsita astmatiforma, complicatie a astmului bronsic, are una din urmatoarele caracteristici:',
        choices: [
            'a. se manifesta prin crize de dispnee paroxistica de tip inspirator;',
            'b. este precedata intotdeauna de crize astmatice;',
            'c. este urmarea infectarii astmului bronsic;'],
        correctAnswer:[1,2]},
    {question: '909 . Cele mai obisnuite alergene, care determina criza de astm bronsic sint urmatoarele :',
        choices: [
            'a. polen, praf de camera;',
            'b. alergene alimentare sau medicamentoase;',
            'c. hemisuccinat de hidrocortizon;'],
        correctAnswer:[0,1]},
    {question: '910 .Criza din astmul bronsic, are urmatoarele caractere:',
        choices: [
            'a. la debut crizele sint tipice cu inceput si sfirsit brusc, cu intervale libere;',
            'b. criza apare , de obicei in a doua jumatate a noptii;',
            'c. nu este niciodata precedata de stranut, lacrimare, prurit al pleoapelor si cefalee;'],
        correctAnswer:[0,1]},
    {question: '911.Dispneea din astmul bronsic are urmatoarele caracteristici(greseala tiparire):',
        choices: [
            'a. este paroxistica, bradipneica;',
            'b. cu expiratie prelungita si suieratoare;',
            'c. este cu tahipnee , de tip inspirator;'],
        correctAnswer:[0,1]},
    {question: '912.Criza de astm bronsic se poate termina:',
        choices: [
            'a. in citeva minute sau ore;',
            'b. in peste 24 de ore;',
            'c. spontan sau sub influenta tratamentului;'],
        correctAnswer:[0,2]},
    {question: '913. Sputa din astmul bronsic are urmatoarele caractere:',
        choices: [
            'a. este viscoasa, albicioasa ( perlata);',
            'b. bogata in eozinofile, cristale Charcot- Leyden si spirale Curschman;',
            'c. este fluida, rozacee si in cantitate mare;'],
        correctAnswer:[0,1]},
    {question: '914 .In astmul bronsic sint folosite, in scop profilactic urmatoarele medicamente:',
        choices: [
            'a. miofilin',
            'b. ketotifen;',
            'c. cromoglicat disodic;'],
        correctAnswer:[1,2]},
    {question: '915.In tratamentul astmului bronsic, corticoterapia:',
        choices: [
            'a. trebuie rezervata formelor grave;',
            'b. este tratamentul cel mai eficace;',
            'c. administrata pe cale orala, nu prezinta riscuri;'],
        correctAnswer:[0,1]},
    {question: '916. Modificarile patologice caracteristice, insuficientei respiratorii cronice, pot aparea:',
        choices: [
            'a. treptat;',
            'b. brusc;',
            'c. variabil;'],
        correctAnswer:[0,2]},
    {question: '917.Accidentele nervoase , posibile in insuficienta respiratorie cronica, sint urmatoarele :',
        choices: [
            'a. crize convulsive;',
            'b. hemiplegie, coma;',
            'c. nistagmus lateral;'],
        correctAnswer:[0,1]},
    {question: '918. Tratamentul insuficientei respiratorii cronice vizeaza urmatoarele:',
        choices: [
            'a. combaterea tusei;',
            'b. fluidifierea si aspirarea secretiilor bronsice;',
            'c. combaterea infectiei bronsice cu antibiotice;'],
        correctAnswer:[1,2]},
    {question: '919.In insuficienta respiratorie cronica , apar urmatoarele simptome:',
        choices: [
            'a. respiratie Cheyne- Stockes;',
            'b. dispnee intensa;',
            'c. hipotensiune arteriala;'],
        correctAnswer:[0,1]},
    {question: '920. Insuficienta respiratorie acuta se caracterizeaza prin urmatoarele:',
        choices: [
            'a. este o urgenta medicala majora;',
            'b. alcaloza respiratorie;',
            'c. interventia de reanimare respiratorie este uneori salvatoare numai in primele minute;'],
        correctAnswer:[0,2]},
    {question: '921. Cele mai importante cauze, care determina insuficienta respiratorie acuta sint urmatoarele:',
        choices: [
            'a. aer viciat prin scaderea oxigenului sau exces de bioxid de carbon;',
            'b. procese laringotraheobronsice, accidente obstructive ale cailor respiratorii superioare, procese pulmonare si pleurale;',
            'c. consum excesiv de alcool si fumatul;'],
        correctAnswer:[0,1]},
    {question: '922 . Procesele pulmonare si pleurale ce pot determina insuficienta respiratorie acuta sint urmatoarele:',
        choices: [
            'a. pleurezii masive bilaterale, pneumotorax sufocant;',
            'b. starea de rau astmatic, embolii pulmonare grave;',
            'c. nevralgia intercostala;'],
        correctAnswer:[0,1]},
    {question: '923. Insuficienta respiratorie acuta poate aparea in urmatoarele situatii:',
        choices: [
            'a. la bolnavii cu afectiuni bronhopulmonare cronice obstructive, aflati in insuficienta respiratorie cronica ;',
            'b. cresterea oxigenului si scaderea bioxidului de carbon in singele arterial;',
            'c. in cazul accidentelor obstructive ale cailor respiratorii superioare;'],
        correctAnswer:[0,2]},
    {question: '924 . Oxigenoterapia, ca tratament al insuficientei respiratorii acute, are urmatoarele caracteristici:',
        choices: [
            'a. consta in administrarea de oxigen in concentratii mai mari decit cea atmosferica;',
            'b. oxigenul nu trebuie umidificat prin aerosoli cu apa sau solutie cloruro- sodica izotonica;',
            'c. se poate administra prin sonda nazala si corturi de oxigen;'],
        correctAnswer:[0,2]},
    {question: '925.Tratamentul medicamentos al insuficientei respiratorii acute , presupune administrarea urmatoarelor medicamente:',
        choices: [
            'a. bronhodilatatoare si expectorante;',
            'b. opiacee si barbiturice;',
            'c. coriticoizi si antibiotice;'],
        correctAnswer:[0,2]},
    {question: '926. In puseul acut din insuficienta respiratorie acuta se administreaza , urmatoarele medicamente:',
        choices: [
            'a. antibiotice cu spectru larg;',
            'b. bronhodilatatoare, secretolitice, corticoterapie;',
            'c.morfina si opiacee;'],
        correctAnswer:[0,1]},
    {question: '927 .Pneumonia pneumococica este caracterizata prin urmatoarele simptome:',
        choices: [
            'a. debutul nu este brutal si nu poate fi bine precizat de bolnav;',
            'b. frison ,febra( pina la 40 de grade) junghi toracic;',
            'c. in zilele premergatoare, exista adeseori o discreta infectie rinofaringiana;'],
        correctAnswer:[1,2]},
    {question: '928. Perioada de stare din pneumonia pneumococica se caracterizeaza prin :',
        choices: [
            'a. fata devine vultuoasa, congestionata mai intens pe partea sanatoasa;',
            'b. buze usor cianotice si vezicule de herpes in jurul buzelor',
            'c. tusea este chinuitoare si uscata la inceput, apoi cu expectoratie rosie, ruginie;'],
        correctAnswer:[1,2]},
    {question: '929. In pneumonia pneumococica:',
        choices: [
            'a. temperatura se mentine " in platou";',
            'b. exista inapetenta si sete vie;',
            'c. bolnavul prezinta poliurie;'],
        correctAnswer:[0,1]},
    {question: '930. Examenul singelui in pneumonia pneumococica evidentiaza:',
        choices: [
            'a. leucocitoza cu polinucleoza;',
            'b. hipofibrinemie;',
            'c. hiperfibrinemie;'],
        correctAnswer:[0,2]},
    {question: '931. In tuberculoza secundara, febra din perioada de stare are urmatoarele caracteristici:',
        choices: [
            'a. la inceput discreta, vesperala, mai tirziu ridicata depasind 39 de grade;',
            'b. la inceput ridicata, vesperala, mai tirziu discreta;',
            'c. este destul de bine suportata de bolnav;'],
        correctAnswer:[0,2]},
    {question: '932. In tuberculoza secundara, tusea are urmatoarele caracteristici:',
        choices: [
            'a. la inceput este uscata si apare in accese;',
            'b. constitue simptomul fundamental;',
            'c. nu se insoteste niciodata de varsaturi;'],
        correctAnswer:[0,1]},
    {question: '933. In tuberculoza secundara, hemoptizia are urmatoarele caracteristici:',
        choices: [
            'a. poate fi minimala, mijlocie sau fulgeratoare;',
            'b. este un simptom frecvent;',
            'c. nu poate provoca moartea bolnavului;'],
        correctAnswer:[0,1]},
    {question: '934. Factorii de risc cei mai importanti ai cardiomiopatiei ischemice sint urmatorii :',
        choices: [
            'a. stresurile emotionale;',
            'b. hipertiroidismul;',
            'c. dieta hiperlipidica;'],
        correctAnswer:[0,2]},
    {question: '935.Cardiopatia ischemica are urmatoarele caracteristici:',
        choices: [
            'a. incidenta maxima este intre 45 si 55 de ani;',
            'b. este cea mai frecventa boala la adultii de peste 30 de ani;',
            'c. asocierea mai multor factori de risc, mareste riscul de aparitie al bolii;'],
        correctAnswer:[0,2]},
    {question: '936.Crizele din angina pectorala pot fi caracterizate prin urmatoarele :',
        choices: [
            'a. crizele dureaza citeva ore;',
            'b. crize paroxistice, cu sediu retrosternal, care apar la efort sau emotii;',
            'c. crizele dispar la administrarea unor compusi nitrici sau incetarea cauzelor;'],
        correctAnswer:[1,2]},
    {question: '937.Angina pectorala are urmatoarele caracteristici :',
        choices: [
            'a. este o forma clinica a cardiopatiei ischemice;',
            'b. se manifesta prin crize dureroase, paroxistice, cu sediu retrosternal;',
            'c. cauza principala a acesteia nu este ateroscleroza coronariana;'],
        correctAnswer:[0,1]},
    {question: '938.Durata crizelor din angina pectorala nu este de :',
        choices: [
            'a. citeva minute;',
            'b. citeva ore;',
            'c. 1-2 zile;'],
        correctAnswer:[1,2]},
    {question: '939.Crizele din angina pectorala au urmatoarele caracteristici :',
        choices: [
            'a. sunt paroxistice;',
            'b. sunt cu sediu epigastric;',
            'c. apar la efort sau emotii;'],
        correctAnswer:[0,2]},
    {question: '940.Caracteristicile durerii din angina pectorala sint urmatoarele :',
        choices: [
            'a. este insotita uneori de anxietate;',
            'b. este variabila, de la jena sau disconfort, la durere atroce;',
            'c. sediul durerii este epigastric;'],
        correctAnswer:[0,1]},
    {question: '941. Sediul durerii din angina pectorala are urmatoarele caracteristici :',
        choices: [
            'a. este aratat de bolnav cu una sau ambele palme;',
            'b. este aratat de bolnav cu degetul;',
            'c. este reprezentata de regiunea retrosternala sau precordiala:'],
        correctAnswer:[0,2]},
    {question: '942. Iradierile importante ale durerii in angina pectorala sint urmatoarele :',
        choices: [
            'a. in ambele membre superioare;',
            'b. in regiunea cervicala posterioara;',
            'c. in regiunea cervicala anterioara si mandibula;'],
        correctAnswer:[0,2]},
    {question: '943. Criza dureroasa din angina pectorala poate fi uneori insotita de urmatoarele :',
        choices: [
            'a. poliurie, tuse seaca,somnolenta;',
            'b. palpitatii, transpiratii, paloare;',
            'c. lipotimie, lipsa de aer, regurgitatii;'],
        correctAnswer:[1,2]},
    {question: '944. Durerea din angina pectorala are urmatoarele caracteristici :',
        choices: [
            'a. are caracter constrictiv;',
            'b. nu poate fi variabila;',
            'c. este insotita uneori de anxietate;'],
        correctAnswer:[0,2]},
    {question: '945. Durerea din angina pectorala cedeaza prompt la urmatoarele medicamente :',
        choices: [
            'a. nitroglicerina;',
            'b. nitrit de amil;',
            'c. oxigenoterapie;'],
        correctAnswer:[0,1]},
    {question: '946. Tratamentul crizei anginoase presupune urmatoarele :',
        choices: [
            'a. intreruperea efortului sau a cauzei declansatoare;',
            'b. administrarea de nitroglicerina sublingual;',
            'c. administrarea de miofilin;'],
        correctAnswer:[0,1]},
    {question: '947. Prevenirea crizelor de angina pectorala se realizeaza prin:',
        choices: [
            'a. evitarea circumstantelor declansatoare;',
            'b. medicamente cu actiune coronarodilatatoare si de favorizare a circulatiei coronariene;',
            'c. tratament anticoagulant;'],
        correctAnswer:[0,1]},
    {question: '948. Infarctul miocardic poate apare la urmatoarele persoane :',
        choices: [
            'a. persoane care prezinta hipercolesterolemie si hipotensiune arteriala;',
            'b. persoane fara antecedente coronariene;',
            'c. persoane care in antecedentele familiale sau personale prezinta accidente vasculare cerebrale, cardiopatii ischemice;'],
        correctAnswer:[1,2]},
    {question: '949. In evolutia infarctului miocardic se deosebesc urmatoarele perioade :',
        choices: [
            'a. prodromala, de debut;',
            'b. perioada de stare si de convalescenta;',
            'c. perioada de cruditate si de coctiune;'],
        correctAnswer:[0,1]},
    {question: '950. Durerea din infarctul miocardic are urmatoarele caracteristici :',
        choices: [
            'a. dureaza mai multe ore, uneori chiar zile;',
            'b. se insoteste de o stare de anxietate, agitatie ,zbucium, senzatie de moarte iminenta;',
            'c. se calmeaza, prin repaus si administrare de nitriti ;'],
        correctAnswer:[0,1]},
    {question: '951. In perioada de debut a infarctului miocardic, pot apare urmatoarele semne :',
        choices: [
            'a. semne de insuficienta respiratorie acuta;',
            'b. semne de insuficienta ventriculara stinga;',
            'c. semne de insuficienta cardiaca globala, mai rar;'],
        correctAnswer:[1,2]},
    {question: '952.Examenele de laborator in infarctul miocardic arata urmatoarele :',
        choices: [
            'a. cresterea fibrinogenului, accelerarea VSH si hiperleucocitoza;',
            'b. cresterea enzimelor in primele ore de la debut;',
            'c. scaderea glicemiei;'],
        correctAnswer:[0,1]},
    {question: '953. Combaterea durerii in infarctul miocardic se realizeaza cu urmatoarele medicamente:',
        choices: [
            'a. mialgin;',
            'b. morfina, in cazul unor dureri severe;',
            'c. nitroglicerina;'],
        correctAnswer:[0,1]},
    {question: '954. Semnele cerebrale prezente in hipertensiunea arteriala, sint urmatoarele :',
        choices: [
            'a. cefalee occipitala, de obicei dimineata, la trezire;',
            'b. somnolenta;',
            'c. tulburari de memorie si concentrare;'],
        correctAnswer:[0,2]},
    {question: '955. Cefaleea din hipertensiunea arteriala are urmatoarele caracteristici :',
        choices: [
            'a. este localizata occipital;',
            'b. apare de obicei nocturn;',
            'c. are caracter pulsatil;'],
        correctAnswer:[0,2]},
    {question: '956.Cauzele determinante ale insuficientei cardiace sint urmatoarele :',
        choices: [
            'a. cauze mecanice care afecteaza la inceput dinamica cardiaca si ulterior miocardul;',
            'b. cauze mecanice care afecteaza la inceput miocardul si ulterior dinamica cardiaca;',
            'c. procese inflamatorii si metabolice , care afecteaza de la inceput miocardul;'],
        correctAnswer:[0,2]},
    {question: '957. Cauzele metabolice ale insuficientei cardiace stingi sint urmatoarele :',
        choices: [
            'a. cardiopatia ischemica;',
            'b. hipertiroidia;',
            'c. insuficienta mitrala;'],
        correctAnswer:[0,1]},
    {question: '958. Clinic, bolnavul cu edem pulmonar prezinta urmatoarele semne si simptome :',
        choices: [
            'a. tahicardie, ritm de galop;',
            'b. bradicardie;',
            'c. la nivelul plaminilor raluri crepitante ,la baze cu extindere spre virfuri;'],
        correctAnswer:[0,2]},
    {question: '959. Tusea din insuficienta cardiaca stinga cronica are urmatoarele caracteristici :',
        choices: [
            'a. se datoreaza stazei pulmonare;',
            'b. este de obicei uscata sau insotita de o mica cantitate de sputa;',
            'c. apare in repaus sau ziua;'],
        correctAnswer:[0,1]},
    {question: '960. Simptomatologia in cordul pulmonar acut cuprinde urmatoarele :',
        choices: [
            'a. dispnee intensa, cu respiratii bruste, rapide si superficiale;',
            'b. anxietate intensa, cianoza, spute hemoptoice, lipotimie;',
            'c. bradicardie accentuata, uneori tuse umeda;'],
        correctAnswer:[0,1]},
    {question: '961. Durerile precordiale din cordul pulmonar acut are urmatoarele caracteristici :',
        choices: [
            'a. apar la eforturi fizice mici;',
            'b. sint violente, constrictive;',
            'c. au caracter coronarian;'],
        correctAnswer:[1,2]},
    {question: '962. Moartea clinica din stopul cardiorespirator nu incepe odata cu :',
        choices: [
            'a. stopul cardiac;',
            'b. stopul respirator;',
            'c. incetarea functiilor cerebrale;'],
        correctAnswer:[1,2]},
    {question: '963. Stopul cardiorespirator se caracterizeaza prin urmatoarele semne clinice :',
        choices: [
            'a. absenta batailor inimii;',
            'b. midriaza cu globi oculari imobili;',
            'c. pierderea cunostintei;'],
        correctAnswer:[0,1]},
    {question: '964. In cadrul reanimarii cardiorespiratorii se verifica oprirea cardiaca, prin urmatoarele:',
        choices: [
            'a. contolul pulsatiilor cardiace si a reflexului pupilar;',
            'b. controlul respiratiei;',
            'c. controlul tensiunii arteriale;'],
        correctAnswer:[0,1]},
    {question: '965 . Reanimarea respiratorie :',
        choices: [
            'a. se practica atit in stopul respirator cit si in cel cardiac;',
            'b. se poate practica fara masaj cardiac;',
            'c. trebuie efectuata intr-un interval de 12- 15 minute pentru a avea succes;'],
        correctAnswer:[0,1]},
    {question: '966. La accidentatii fara cunostinta obstructia cailor aeriene se realizeaza frecvent prin urmatoarele :',
        choices: [
            'a. caderea limbii, daca acesta este culcat pe spate;',
            'b. prezenta corpilor straini( singe, secretii, varsaturi);',
            'c. caderea limbii , daca acesta este in decubit ventral;'],
        correctAnswer:[0,1]},
    {question: '967. Pozitia de siguranta din stopul cardiorespirator este contraindicata in urmatoarele situatii:',
        choices: [
            'a. obstructia cailor respiratorii;',
            'b. fracturi de coloana;',
            'c. unele leziuni ale peretelui toracic;'],
        correctAnswer:[1,2]},
    {question: '968. Eficienta ventilatiei artificiale si a masajului cardiac extern se apreciaza prin urmatoarele:',
        choices: [
            'a. decolorarea tegumentelor;',
            'b. aparitia pulsului la vasele mari ( carotida , femurala);',
            'c. disparitia midriazei si reaparitia reflexului la lumina;'],
        correctAnswer:[1,2]},
    {question: '969.Contraindicatiile masajului cardiac extern sint urmatoarele :',
        choices: [
            'a. leziuni grave ale peretelui toracic, cu fracturi costale;',
            'b. embolie grasoasa;',
            'c. hemoragie masiva intrapericardica si tamponada inimii;'],
        correctAnswer:[0,2]},
    {question: '970. Edemul pulmonar acut lezional poate fi provocat de urmatoarele cauze:',
        choices: [
            'a. cauze toxice;',
            'b. cauze infectioase;',
            'c. tulburari de ritm paroxistice;'],
        correctAnswer:[0,1]},
    {question: '971. Morfina nu este contraindicata in tratamentul edemului pulmonar acut lezional in urmatoarele situatii:',
        choices: [
            'a. in intoxicatii;',
            'b. la inecati;',
            'c. la uremici;'],
        correctAnswer:[0,1]},
    {question: '972. In tratamentul edemului pulmonar acut cardiogen, morfina se administreaza in urmatoarele situatii :',
        choices: [
            'a. astm bronsic;',
            'b. accident vascular cerebral;',
            'c. hipertensiune arteriala;'],
        correctAnswer:[0,2]},
    {question: '973. In tratamentul edemului pulmonar acut cardiogen, venesectia este contraindicata, in urmatoarele situatii :',
        choices: [
            'a. infarct miocardic acut;',
            'b. la bolnavii virstnici cu ateroscleroza cerebrala;',
            'c. insuficienta ventriculara stinga;'],
        correctAnswer:[0,1]},
    {question: '974. In edemul pulmonar acut cardiogen, cu tensiune scazuta sint contraindicate urmatoarele :',
        choices: [
            'a. emisiunea de singe( venesectie);',
            'b. morfina;',
            'c. oxigenoterapia;'],
        correctAnswer:[0,1]},
    {question: '975.In edemul pulmonar acut la inecatii in apa de mare, sint contraindicate urmatoarele :',
        choices: [
            'a. diureticele;',
            'b. singerarea;',
            'c. oxigenoterapie masiva, 10- 12 l/ minut;'],
        correctAnswer:[0,1]},
    {question: '976.Cauzele de origine cardiaca ale insuficientei respiratorii acute sint urmatoarele :',
        choices: [
            'a. astm cardiac;',
            'b. infarct miocardic acut;',
            'c. BPOC:'],
        correctAnswer:[0,1]},
    {question: '977. Cauzele de origine extrapulmonara ale insuficientei respiratorii acute sint urmatoarele :',
        choices: [
            'a. edemul pulmonar acut;',
            'b. intoxicatiile cu barbiturice, opiacee;',
            'c. meningite, meningoencefalite;'],
        correctAnswer:[1,2]},
    {question: '978. Cauzele de origine bronhopulmonara ale insuficientei pulmonare acute sint urmatoarele:',
        choices: [
            'a. BPOC;',
            'b. crize de astm bronsic;',
            'c. embolie pulmonara;'],
        correctAnswer:[0,1]},
    {question: '979. Cauzele de origine cardiaca ale insuficientei respiratorii acute sint urmatoarele:',
        choices: [
            'a. cordul pulmonar acut;',
            'b. embolia pulmonara;',
            'c. BPOC;'],
        correctAnswer:[0,1]},
    {question: '980. Dispneea din insuficienta respiratorie acuta , produsa de obstacole in caile aeriene superioare, are urmatoarele caracteristici :',
        choices: [
            'a. este de tip bradipnee inspiratorie;',
            'b. este insotita de tiraj si cornaj;',
            'c. este de tip polipnee inspiratorie;'],
        correctAnswer:[0,1]},
    {question: '981. Respiratia paradoxala din insuficienta respiratorie acuta poate apare in urmatoarele situatii :',
        choices: [
            'a. embolie pulmonara;',
            'b. plagi pleuro- pulmonare;',
            'c. volet costal;'],
        correctAnswer:[0,1]},
    {question: '982. Durerea din infarctul miocardic acut poate avea urmatoarele caractere :',
        choices: [
            'a. o senzatie de constrictie sau de "gheara";',
            'b. o senzatie de intepatura;',
            'c. o senzatie de presiune;'],
        correctAnswer:[0,2]},
    {question: '983. Hepatita cronica :',
        choices: [
            'a. nu are o evolutie spre ciroza hepatica;',
            'b. 75 % din bolnavii cu hepatita cronica prezinta in antecedente hepatita virala;',
            'c. se manifesta la cel putin 6 luni de la debutul hepatitei virale;'],
        correctAnswer:[1,2]},
    {question: '984.Factorii etiologici ai hepatitei cronice sint urmatorii:',
        choices: [
            'a. consum exagerat de etanol;',
            'b. toxiinfectii alimentare;',
            'c. frigul si umiditatea;'],
        correctAnswer:[0,1]},
    {question: '985. Cauzele hepatitei cronice sint urmatoarele:',
        choices: [
            'a. mecanice;',
            'b. medicamentoase;',
            'c. virale;'],
        correctAnswer:[1,2]},
    {question: '986.Cauzele microbiene care determina aparitia hepatitei cronice sint urmatoarele :',
        choices: [
            'a. leptospire;',
            'b. paraziti;',
            'c. anaerobi;'],
        correctAnswer:[0,1]},
    {question: '987.Etiologia virala a hepatitei cronice nu este sigura la :',
        choices: [
            'a. 75 % din cazuri;',
            'b. 25% din cazuri;',
            'c. 50 % din cazuri;'],
        correctAnswer:[1,2]},
    {question: '988.Cauzele hepatitei cronice pot fi urmatoarele:',
        choices: [
            'a. rickettsioze;',
            'b. cauze nutritionale;',
            'c. traumatismele;'],
        correctAnswer:[0,1]},
    {question: '989. Cauzele microbiene care determina aparitia hepatitei cronice sint urmatoarele:',
        choices: [
            'a. salmonele;',
            'b. colibacili;',
            'c. klebsiella;'],
        correctAnswer:[0,1]},
    {question: '990. Cauzele dismetabolice care determina aparitia hepatitei cronice sint urmatoarele :',
        choices: [
            'a. hipertiroidie;',
            'b. obezitate;',
            'c. diabet;'],
        correctAnswer:[1,2]},
    {question: '991. Hepatita cronica are urmatoarele caracteristici :',
        choices: [
            'a. icterul este simptomul esential;',
            'b. in 75 % din cazuri hepatita cronica urmeaza unei hepatite acute virale evidenta clinic;',
            'c. examenele biologice si histologice nu transeaza diagnosticul;'],
        correctAnswer:[0,1]},
    {question: '992. In perioada de stare a hepatitei cronice sint prezente urmatoarele sindroame :',
        choices: [
            'a. sindrom excretobiliar;',
            'b. sindrom de hepatocitoliza;',
            'c. sindrom fibrinolitic;'],
        correctAnswer:[0,1]},
    {question: '993. In perioada de stare a hepatitei cronice sint prezente urmatoarele sindroame :',
        choices: [
            'a. sindromul hepatopriv;',
            'b. sindromul de activare mezenchimala;',
            'c. sindromul de fibrinoliza;'],
        correctAnswer:[0,1]},
    {question: '994. Hepatomegalia din hepatita cronica are urmatoarele caractere :',
        choices: [
            'a. este uneori dureroasa la efort;',
            'b. fermitatea sa nu este conditionata de accentuarea fibrozei;',
            'c. este obisnuita ( 80 % );'],
        correctAnswer:[0,2]},
    {question: '995. Angioamele stelare din hepatita cronica au urmatoarele caracteristici :',
        choices: [
            'a. apar adesea precoce;',
            'b. apar in puseuri, care coincid cu exacerbarea icterului;',
            'c. apar adesea tardiv;'],
        correctAnswer:[0,1]},
    {question: '996.Astenia din hepatita cronica are urmatoarele caractere :',
        choices: [
            'a. contrasteaza cu starea generala;',
            'b. este de obicei bine pastrata;',
            'c. este un simptom esential;'],
        correctAnswer:[0,1]},
    {question: '997. Tulburarile digestive ce pot apare in hepatita cronica sint urmatoarele :',
        choices: [
            'a. tulburari dispeptice biliare;',
            'b. tulburari pancreatice;',
            'c. colon iritabil;'],
        correctAnswer:[0,1]},
    {question: '998.. Hepatita cronica are urmatoarele caracteristici :',
        choices: [
            'a. in cazuri exceptionale se instaleaza fara semne clinice;',
            'b. in 75 % din cazuri urmeaza unei hepatite virale acute evidente;',
            'c. simptomul esential este hepatalgia:'],
        correctAnswer:[0,1]},
    {question: '999 . Febra din hepatita cronica are urmatoarele caractere :',
        choices: [
            'a. este inconstanta;',
            'b. este moderata;',
            'c. este inalta;'],
        correctAnswer:[0,1]},
    {question: '1000.Hepatita cronica cind apre la femei tinere se insoteste de urmatoarele :',
        choices: [
            'a. acnee, hirsutism;',
            'b. amenoree;',
            'c. tiroidita;'],
        correctAnswer:[0,1]},
    {question: '1001. Amenoreea din hepatita cronica are urmatoarel caracteristici :',
        choices: [
            'a. apare de regula la femeia tinara;',
            'b. nu se asociaza cu alte boli autoimune frecvente;',
            'c. ameliorarea sa urmeaza evolutiei leziunilor hepatice;'],
        correctAnswer:[0,2]},
    {question: '1002. Hepatita cronica agresiva are urmatoarele caracteristici :',
        choices: [
            'a. urmeaza obisnuit unei hepatite virale acute;',
            'b. uneori evolutia este simptomatica timp indelungat;',
            'c. tabloul clinic este functie de activitatea procesului patologic;'],
        correctAnswer:[0,2]},
    {question: '1003. Simptomatologia din hepatita cronica agresiva are urmatoarele carcateristici :',
        choices: [
            'a. icterul nu apare cu ocazia puseurilor de agravare;',
            'b. tabloul clinic este in functie de activitatea procesului partologic;',
            'c. angioamele stelare reprezinta un semn de agravare;'],
        correctAnswer:[1,2]},
    {question: '1004. Simptomatologia din hepatita cronica persistenta are urmatoarele caracteristici :',
        choices: [
            'a. anorexie persistenta;',
            'b. splenomegalia, febra si manifestarile extrahepatice sint frecvente;',
            'c. 50 % din bolnavi au o stare generala buna;'],
        correctAnswer:[0,2]},
    {question: '1005. Hepatita cronica persistenta are urmatoarele caracteristici :',
        choices: [
            'a. antigenul Australia este prezent in 10 % din cazuri ;',
            'b. boala nu evolueaza catre ciroza hepatica;',
            'c. afecteaza ambele sexe;'],
        correctAnswer:[1,2]},
    {question: '1006.In hepatita cronica agresiva sint prezente urmatoarele simptome :',
        choices: [
            'a. astenie , oboseala;',
            'b. apetit crescut;',
            'c. scaune neregulate;'],
        correctAnswer:[0,2]},
    {question: '1007. Examenele biologice din hepatita cronica agresiva indica urmatoarele :',
        choices: [
            'a. VSH este moderat crescut;',
            'b. timolul este scazut;',
            'c. electroforeza arata hiposerinemie;'],
        correctAnswer:[0,2]},
    {question: '1008. Hepatita cronica agresiva cu antigen Australia pozitiv are urmatoarele caracteristici',
        choices: [
            'a. este mai frecventa la barbati;',
            'b. apare in principal la femeia tinara;',
            'c. semnele clinice sint mai discrete;'],
        correctAnswer:[0,2]},
    {question: '1009.Hepatita cronica agresiva cu antigen Australia negativ are urmatoarele catacteristici:',
        choices: [
            'a. are tabloul foarte bogat , iar biologic foarte alterat;',
            'b. nu apare in principal la femeia tinara;',
            'c. este mai frecventa la barbati;'],
        correctAnswer:[1,2]},
    {question: '1010.Hepatita cronica agresiva are urmatoarele caracteristici :',
        choices: [
            'a. urmeza obisnuit unei hepatite acute virale;',
            'b. cind apare la femeile tinere, se insoteste de tulburari endocrine;',
            'c. tabloul clinic al bolii nu este functie de activitatea procesului patologic;'],
        correctAnswer:[0,1]},
    {question: '1011. Icterul din hepatita cronica are urmatoarele caracteristici :',
        choices: [
            'a. este simptomul esential;',
            'b. nu evolueaza in puseuri;',
            'c. poate lua o alura colestatica;'],
        correctAnswer:[0,2]},
    {question: '1012. Hepatita cronica este o leziune sistematizata caracterizata prin:',
        choices: [
            'a. infiltrare predominant portala, cu celule mononucleare, limfocite si predominant plasmocite;',
            'b. dezvoltarea anormala a tesutului conjunctiv;',
            'c. dezvoltarea anormala a tesutului epitelial;'],
        correctAnswer:[0,1]},
    {question: '1013. Hipopotasemia ca efect secundar al tratamentului cu diuretice din cadrul insuficientei cardiace cronice nu se previne cu :',
        choices: [
            'a. clorura de calciu ;',
            'b. clorura de potasiu ;',
            'c. clorura de natriu ;'],
        correctAnswer:[0,2]},
    {question: '1014. Pentru combaterea anxietatii in tratamentul infarctului miocardic acut nu se  administreaza:',
        choices: [
            'a. sedative;',
            'b. antidepresive;',
            'c. sedative concomitent cu antidepresive;'],
        correctAnswer:[1,2]},
    {question: '1015. Pentru a evita greselile fatale, in conduita de urgenta, asistenta medicala trebuie sa stie sa diferentieze astmul bronsic de urmatoarele afectiuni :',
        choices: [
            'a. BPOC;',
            'b. astmul cardiac;',
            'c. edemul pulmonar acut;'],
        correctAnswer:[1,2]},
    {question: '1016.In tratamentul astmului bronsic, hemisuccinatul de hidrocortizon nu se administreaza :',
        choices: [
            'a. in doza de 250- 400 mg subcutanat;',
            'b. in cazul in care criza nu cedeaza la miofilin;',
            'c. in doza de 400-500 mg intravenos;'],
        correctAnswer:[0,2]},
    {question: '1017. In cadrul resuscitarii cardiorespiratorii, respiratia artificiala nu se realizeaza intr-un ritm de :',
        choices: [
            'a. 18- 20 respiratii / minut;',
            'b. 16-18 respiratii / minut;',
            'c. 14-16 respiratii / minut;'],
        correctAnswer:[0,1]},
    {question: '1018. Semnele obstruarii cailor aeriene sint urmatoarele :',
        choices: [
            'a. absenta miscarilor respiratorii normale;',
            'b. dispnee zgomotoasa;',
            'c. prezenta curentului de aer la nas sau la gura;'],
        correctAnswer:[0,1]},
    {question: '1019.Principalele simptome functionale ale insuficientei cardiace cronice drepte sint urmatoarele :',
        choices: [
            'a. hepatalgie resimtita ca o durere surda in hipocondru drept sau epigastru;',
            'b. junghi toracic submamelonar sau posterior;',
            'c. dispnee variabila ca intensitate;'],
        correctAnswer:[0,2]},
    {question: '1020.Insuficienta cardiaca dreapta este un sindrom clinic care nu este provocat de :',
        choices: [
            'a. necroza ischemica a unei portiuni de miocard;',
            'b. dilatarea si insuficienta brusca a inimii drepte;',
            'c. obstructia brusca a inimii drepte;'],
        correctAnswer:[0,2]},
    {question: '1021.Diseminarea de la nivelul plaminului a bacilului Koch se poate face prin urmatoarele cai:',
        choices: [
            'a. limfatica si hematogena;',
            'b. aeriana;',
            'c. bronhogena;'],
        correctAnswer:[0,2]},
    {question: '1022.Atributiile asistentului medical in prevenirea si controlul infectiilor nosocomiale sunt:',
        choices: [
            'a. pregatirea materialelor pentru sterilizare si respectarea conditiilor de pastrare si utilizare lor;',
            'b. respecta si raspunde de aplicarea regulilor de igiena si regulilor de tehnica aseptica.',
            'c. refuza internarea bolnavilor contagiosi.'],
        correctAnswer:[0,1]},
    {question: '1023. Obiectivele permanente in prevenirea infectiilor nosocomiale sunt:',
        choices: [
            'a. alegerea procedurilor de investigatie si tratament cu risc minim de infectie.',
            'b. masuri de igiena spitaliceasca',
            'c. utilizarea antibioticelor cu spectru larg de actiune.'],
        correctAnswer:[0,1]},
    {question: '1024. Ce importanta are spalarea miinilor in prevenirea infectiilor cu cale de transmitere sanguina:',
        choices: [
            'a. nu prezinta importanta in prevenirea infectiilor cu cale de transmitere sanguina;',
            'b. uneori este singurul mod de prevenire a contaminarii si diseminarii agentilor microbieni;',
            'c. cel mai important mod de prevenire a contaminarii si diseminarii agentilor microbieni.'],
        correctAnswer:[1,2]},
    {question: '1025. In cazul expunerii profesionale cu produse patologice (inoculare percutana, intepatura, taietura) ce atitudine luati?',
        choices: [
            'a. stimularea singerarii locale;',
            'b. clatirea cu apa;',
            'c. aplicarea de antiseptice, dezinfectante, spalarea cu apa si sapun sau detergent.'],
        correctAnswer:[0,2]},
    {question: '1026. Incidenta infectiilor nosocomiale este crescuta in serviciile:',
        choices: [
            'a. nou-nascuti;',
            'b. terapie intensiva;',
            'c. endocrinologice.'],
        correctAnswer:[0,1]},
    {question: '1027.Administrarea hormonilor corticosuprarenali este indicata in:',
        choices: [
            'a. osteoporoza;',
            'b. afectiuni reumatice;',
            'c. afectiuni alergice.'],
        correctAnswer:[0,1]},
    {question: '1028.Arsura de gradul III se caracterizeaza prin:',
        choices: [
            'a. interesarea epidermului si partial a dermului',
            'b. aparitia flictenelor sero-sanguinolente',
            'c. cicatrizare rapida cu restitutia ad integrum'],
        correctAnswer:[0,1]},
    {question: '1029.Ce complicatii pot aparea intr-o arsura intinsa?',
        choices: [
            'a. soc hipovolemic',
            'b. infectie, nefrita, bronhopneumonie, hemoragie digestiva',
            'c. escare, intoxicatia centrilor nervosi cerebrali, urmata de confuzii, pierderi de cunostinta, paralizii'],
        correctAnswer:[1,2]},
    {question: '1030.Care sunt conditiile unui bun bandaj?',
        choices: [
            'a. infasarea se executa cu miscari bine coordonate evitind provocarea de dureri',
            'b. infasarea se va face de la stinga la dreapta (celui care executa)',
            'c. infasarea se va face compresiv pentru a mentine pansamentul'],
        correctAnswer:[0,1]}


];





function AllQuestionsConstructor(origArray) {
	this.originalObjects = origArray;
	this.currentIndex = 0;
	this.allQuestionsNo = this.originalObjects.length;

	this.increaseIndex = function() {this.currentIndex++;};
	this.decreaseIndex = function() {this.currentIndex--;};
	this.currentQuestion = function() {return this.originalObjects[this.currentIndex].question;};
	this.choicesNo = function() {return this.originalObjects[this.currentIndex].choices.length;};
	this.allChoices = function() {return this.originalObjects[this.currentIndex].choices;};
	this.correctChoice = function() {return this.originalObjects[this.currentIndex].correctAnswer;};
	this.setInitialIndex = function() {this.currentIndex = prompt("introduceti nr intrebarii ", "0"); initialLoad(this); };
}


var allQuestionsObj = new AllQuestionsConstructor(allQuestions);


var scoreObj = {
	score: 0,
	increase: function() {this.score++;},
	get: function() {return this.score;}
};


var userAnswersRecorderObj = {};


/*************************************  Main Driver begin: ******************************/
allQuestionsObj.setInitialIndex();
function initialLoad(questObj) {
 //   questObj.setInitialIndex();
	createQuestionHTML(questObj);
	createRadiosHTML(questObj);
	createButtonHTML("back");
	createButtonHTML("next");
	createButtonHTML("show");
//	createNextButtonHTML();
}
// var initialQuestion = prompt("introduceti nr intrebarii ", "0");
//document.body.onload = initialLoad.call(this, allQuestionsObj);
//document.getElementById("startBtn").addEventListener("click", initialLoad.call(this, allQuestionsObj));
function getInitialQuestionNo(){

}


function showCorrectAnswer(questObj) {  // medicine
//	alert(questObj.correctChoice());
    if (questObj.correctChoice()[1]=="9") {
        var correctAnswerContainerId = "label" + questObj.correctChoice()[0]; // answer-container  label
        document.getElementById(correctAnswerContainerId).style.backgroundColor = "yellow";
    }
    else{
        var correctAnswerContainerId = "label" + questObj.correctChoice()[0]; // answer-container  label
        var correctAnswerContainerId1 = "label" + questObj.correctChoice()[1];
        document.getElementById(correctAnswerContainerId).style.backgroundColor = "yellow";
        document.getElementById(correctAnswerContainerId1).style.backgroundColor = "yellow";
    }
}
var showCorrectAnswerCall = function() {showCorrectAnswer(allQuestionsObj);};
document.getElementById("showBtn").addEventListener("click", showCorrectAnswerCall);


function goNext(questObj, scObj, ansObj) {

	// used when user does not check any answer to display the same question again and decrease index
	var skipQuestion = false;

	if(questObj.currentIndex < questObj.allQuestionsNo) {

		if(! validateUserInput()) {
			skipQuestion = true;
			alert("You must check an option !");
		}

		if(! skipQuestion) {
			recordUserAnswers(questObj, ansObj);
//			computeScore(questObj, scObj);  // new
		}

		removeRadiosHTML(questObj);
	}

  questObj.increaseIndex();

	if(skipQuestion) {
		questObj.decreaseIndex();
	}

	if(questObj.currentIndex < questObj.allQuestionsNo) {

		replaceQuestion(questObj);
		createRadiosHTML(questObj);
		if(questObj.currentIndex < Object.keys(ansObj).length) {  // new
			rememberUserAnswers(questObj, ansObj);
		}

	} else {
		displayScore(questObj, ansObj);
//	displayScore(questObj, scObj);  // old version computing at each click
	}

// delete this test function and div in index.html file
//showUserAnswers(ansObj);
// alert("Answers length = " + Object.keys(ansObj).length);
} // function
var goNextCall = function() {goNext(allQuestionsObj, scoreObj, userAnswersRecorderObj);};
document.getElementById("nextBtn").addEventListener("click", goNextCall);



/*************************  Second Version: ****************/

function goBack(questObj, scObj, ansObj) {

	if(questObj.currentIndex >= 0) {

		recordUserAnswers(questObj, ansObj); // new
//		computeScore(questObj, scObj);  // change function
		removeRadiosHTML(questObj);
	}

	if(questObj.currentIndex > 0) {
		questObj.decreaseIndex();
	}

	if(questObj.currentIndex >= 0) {

		replaceQuestion(questObj);
		createRadiosHTML(questObj);
		rememberUserAnswers(questObj, ansObj);
	}

	// delete this test function and div in index.html file
//	showUserAnswers(ansObj);
} // function
var goBackCall = function() {goBack(allQuestionsObj, scoreObj, userAnswersRecorderObj);};
document.getElementById("backBtn").addEventListener("click", goBackCall);



/*************************************  Main Driver End******************************/







/* *************** Function Definitions begin: *******************/

function createQuestionHTML(questObj) {
	var question = document.getElementById("question");
	var x = document.createElement("p");
	x.setAttribute("id", "questParagraph");
	var y = document.createTextNode(questObj.currentQuestion());
	x.appendChild(y);
	question.appendChild(x);
}

function replaceQuestion(questObj) {
	document.getElementById("questParagraph").innerHTML = questObj.currentQuestion();
}



function createRadiosHTML(questObj) {
	var x, y, z, i, cdiv;
	var choiceId, labelId, choiceContainerId, grupId;

	var radios = document.getElementById("radios");

	// find out how many choices has the answer
	var choicesNumber = questObj.choicesNo();

	// create radios and their texts into labels
	for (i = 0; i < choicesNumber; i++) {
		

		// create ids for the current container div, radio button and its label
		choiceContainerId = "answer-container" + i; // medicine
		choiceId = "answer" + i;
		labelId = "label" + i;
		grupId = "grup" + i;
		
		// create a container div for the current radio button  // medicine
		cdiv = document.createElement("DIV");
		cdiv.setAttribute("class", "answer-container");
		cdiv.setAttribute("id", choiceContainerId);

		// create a radio button, set attributes and then append it to radios div
		x = document.createElement("INPUT");
		x.setAttribute("type", "radio");
		x.setAttribute("name", grupId);
		x.setAttribute("class", "answer");
		x.setAttribute("id", choiceId);
		cdiv.appendChild(x);

		// create label for the current radio button id
		y = document.createElement("LABEL");
		y.setAttribute("for", choiceId);
		y.setAttribute("id", labelId);
		// get text of the current choice and append to label
		z = document.createTextNode(questObj.allChoices()[i]);
		y.appendChild(z);
		// append current label to radios div
		cdiv.appendChild(y);
		
		radios.appendChild(cdiv);
	}
}


function removeRadiosHTML(questObj) {

	var radioBtn, radioLabel, radioId, labelId, i, containerDiv, choiceContainerId;
	var radiosNumber = questObj.choicesNo();

	for (i = 0; i < radiosNumber; i++) {

		radioId = "answer" + i;
		labelId = "label" + i;
		choiceContainerId = "answer-container" + i; // medicine
		// remove radio button
		radioBtn = document.getElementById(radioId);
		radioBtn.parentNode.removeChild(radioBtn);
		// remove radio label
		radioLabel = document.getElementById(labelId);
		radioLabel.parentNode.removeChild(radioLabel);
		// remove container div of individual (current) answer     // medicine
		containerDiv = document.getElementById(choiceContainerId);
		containerDiv.parentNode.removeChild(containerDiv);
	}
}


// arguments: "next", "back"
function createButtonHTML(goDirection) {
	var x, y;
	var idValue = goDirection.toLowerCase() + "Btn";
	var btnText = capitalize(goDirection);
	var buttons = document.getElementById("buttons");
	// Create button and set attributes
	x = document.createElement("BUTTON");
	x.setAttribute("type", "button");
	x.setAttribute("id", idValue);  // nextBtn, backBtn
	// Create text node and append it to the button
	y = document.createTextNode(btnText);  // Next, Back
	x.appendChild(y);
	// Append button to the buttons div
	buttons.appendChild(x);
}


function validateUserInput() {
	var radios = document.getElementsByClassName("answer");
	var radiosNo = radios.length;
	var isChecked = false;
	var i;

	for (i = 0; i < radiosNo; i++) {
		if (radios[i].checked) {
			isChecked = true;
		}
	}
	return isChecked;
} // function

// unused duplicate function
function validateUserInputNew() {
	var radios = document.getElementsByClassName("answer");
	var radiosNo = radios.length;
	var isChecked = false;
	var i = 0;

  while (!isChecked && i < radiosNo) {
		if (radios[i].checked) isChecked = true;
		i++;
  }

  if (!isChecked) prompt("Have you checked an option ?");
	// alert(Ok)  confirm(Ok, Cancel)  prompt(Text input, Ok, Cancel)

	return isChecked;
} // function







function displayScore(questObj, ansObj) {  // scObj

	var questNo = questObj.allQuestionsNo;
	var userScore = computeScore(questObj, ansObj);  // scObj.get();
	var percentScore = 100 * userScore / questNo;
	var scoreText = "You answered correctly " + userScore + " out of " + questNo + " questions. " + "<br>";
	scoreText += "Percentage score: " + percentScore.toPrecision(3) + " \% .";

	document.getElementById("questParagraph").innerHTML = scoreText;
} // function



// source: https://stackoverflow.com/questions/4878756/how-to-capitalize-first-letter-of-each-word-like-a-2-word-city
function capitalize(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


function recordUserAnswers(questObj, ansObj) {
	var radios = document.getElementsByClassName("answer");
	var radiosNo = radios.length;
	var stringCurrIndex = questObj.currentIndex + ""; // converted to string
	var i;

	for (i = 0; i < radiosNo; i++) {
		if (radios[i].checked) {
			// record pairs of (question index: user answer) as (key: value) pairs, both as strings
			ansObj[stringCurrIndex] = i + "";
		}
	}
} // function


// dele this test function and the div "sterge" in index.html file
function showUserAnswers(someObj) {
	var myJSON = JSON.stringify(someObj);
	document.getElementById("sterge").innerHTML = myJSON;
}


function rememberUserAnswers(questObj, ansObj) {

	var radios = document.getElementsByClassName("answer");
	var questionCurrIndex = questObj.currentIndex + ""; // converted to string
	var chosenRadio = ansObj[questionCurrIndex];

	radios[chosenRadio].checked = true;


//  var radioId = "answer" + i;
//	document.getElementById(radioId).checked = true;


/* good variants for checking the first answer always:
	document.getElementsByClassName("answer")[0].checked = true;
	document.getElementById("answer0").checked = true;
	var x = document.getElementById("answer0");
	x.setAttribute("checked", "true");
*/

} // function



function computeScore(questObj, ansObj) {

	var allQuestionsNumber = questObj.allQuestionsNo; // Object.keys(ansObj).length
	var i, stringI, score = 0;

	for (i = 0; i < allQuestionsNumber; i++) {
		stringI  = i + "";
		if(ansObj[stringI] === questObj.originalObjects[i].correctAnswer + "")
		score++;
	}

	return score;
} // function


// Computes score in each iteration
/*
function computeScore(questObj, scObj) {
	var radios = document.getElementsByClassName("answer");
	var radiosNo = radios.length;
	var choiceId, i;

	for (i = 0; i < radiosNo; i++) {
		choiceId = "answer" + i;
		if(document.getElementById(choiceId).checked &&	questObj.correctChoice() === i) {
		 scObj.increase();
	  }
	}
} // function

*/
























//
