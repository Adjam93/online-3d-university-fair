    var i;
    var a_out = document.getElementById("a");
    var a_list = ["Accountancy BSc", "Accounting and Finance for Contemporary China MSci",
                    "Aerospace Engineering BEng", "Aerospace Engineering including an Industrial Year BEng",
                    "Aerospace Engineering including an Industrial Year MEng", "Aerospace Engineering MEng",
                    "Agricultural and Crop Science BSc", "Agricultural and Livestock Science BSc",
                    "Agricultural Business Management (Integrated) BSc", "Agricultural Business Management with Industrial Placement Award (Integrated) BSc",
                    "Agricultural Science (International) BSc", " Agriculture BSc",
                    "American and Canadian Literature, History and Culture (International Study) BA",
                    "American and Canadian Literature, History and Culture BA",
                    "American Studies and English BA", "American Studies and Film and Television Studies BA",
                    "American Studies and History BA", "American Studies and Latin American Studies BA",
                    "Ancient History and Archaeology BA", "Ancient History and History BA",
                    "Ancient History BA", "Animal Science BSc",
                    "Archaeology and Classical Civilisation BA", " Archaeology and Geography BA",
                    "Archaeology and History BA", " Archaeology and History of Art BA",
                    "Archaeology BA", "Archaeology BSc",
                    "Architectural Environment Engineering BEng", "Architecture and Environmental Design MEng",
                    "Architecture BArch", "Architecture Diploma DipArch", " Art History and History BA",
                    "Arts and Humanities Foundation Certificate", " Arts Programmes with Foundation Year"];

    var b_out = document.getElementById("b");
    var b_list = ["BArch Bachelor of Architecture", "Biblical Studies and Theology BA",
                    "Biochemistry and Biological Chemistry BSc", "Biochemistry and Biological Chemistry MSci",
                    "Biochemistry and Genetics BSc", "Biochemistry and Genetics MSci",
                    "Biochemistry and Molecular Medicine BSc", "Biochemistry BSc",
                    "Biology BSc", "Biology MSci",
                    "Biotechnology BSc", "Business and Economy of Contemporary China BSc",
                    "Business and Economy of Contemporary China MSci"];

    var c_out = document.getElementById("c");
    var c_list = ["Chemical engineering beng", "Chemical Engineering including an Industrial Year BEng",
                       "Chemical Engineering including an Industrial Year MEng",
                       "Chemical Engineering MEng", "Chemical Engineering with Environmental Engineering BEng",
                       "Chemical Engineering with Environmental Engineering including an Industrial Year BEng",
                       "Chemical Engineering with Environmental Engineering including an Industrial Year MEng",
                       "Chemical Engineering with Environmental Engineering MEng", "Chemistry and Molecular Physics BSc",
                       "Chemistry and Molecular Physics MSci", "Chemistry BScChemistry MSci",
                       "Chemistry with a Year in Industry MSci", "Chemistry with an International Study Year MSci",
                       "Civil Engineering BEng Civil Engineering MEng", "Classical Civilisation and Philosophy BA",
                       "Classical Civilisation BA", "Classical Civilisations and Archaeology BA", "Classics and English BA",
                       "Classics BA", "Computer Science and Artificial Intelligence with Year in Industry BSc",
                       "Computer Science BSc", "Computer Science including International Year MSci",
                       "Computer Science MSci", "Computer Science with Artificial Intelligence BSc",
                       "Computer Science with Artificial Intelligence including International Year MSci",
                       "Computer Science with Artificial Intelligence MSci", "Computer Science With Year in Industry BSc",
                       "Contemporary Chinese Studies and French BA", "Contemporary Chinese Studies and German BA",
                       "Contemporary Chinese Studies and Global Issues MSci", "Contemporary Chinese Studies and Russian BA",
                       "Contemporary Chinese Studies and Spanish BA", "Contemporary Chinese Studies BA",
                       "Contemporary Chinese Studies MSci", "Contemporary Chinese Studies with International Relations BA",
                       "Criminology and Social Policy Criminology and Sociology BA"];

    var d_out = document.getElementById("d");
    var d_list = ["Data Science BSc", "Dietetics and Nutrition MNutr"];

    var e_out = document.getElementById("e");
    var e_list = [" East European Cultural Studies and History BA", "Economics and Econometrics BSc",
        "Economics and International Economics BA/BSc", "Economics and Mathematics BSc",
        "Economics and Philosophy BA", "Economics and Politics BA",
        "Economics BA/BSc", "Economics with Chinese Studies BA",
        "Economics with French BA", "Economics with German BA",
        "Economics with Hispanic Studies BA", "Economics with Russian BA",
        "Electrical and Electronic Engineering BEng", " Electrical and Electronic Engineering including an Industrial Year BEng",
        "Electrical and Electronic Engineering including an Industrial Year MEng", " Electrical and Electronic Engineering MEng",
        "Electrical and Electronic Engineering with a Year Abroad BEng", "Electrical and Electronic Engineering with a Year Abroad MEng",
        "Electrical Engineering and Renewable Energy Systems BEng", "Electrical Engineering and Renewable Energy Systems MEng",
        "Electrical Engineering BEng", "Electrical Engineering MEng",
        "Electronic and Communications Engineering BEng", " Electronic and Communications Engineering MEng",
        "Electronic and Computer Engineering BEng", "Electronic and Computer Engineering MEng",
        "Electronic Engineering BEng", "Electronic Engineering MEng",
        "Engineering and Physical Sciences Foundation Certificate", " Engineering and Physical Sciences Foundation Programme",  
        "English and American Studies BA", " English and American Studies BA", " English and Art History BA",
        "English and Classics BA", "English and French BA", "English and German BA", "English and Hispanic Studies BA", 
        "English and History BA", "English and Philosophy BA", "English BA",
        "English Language and Literature BA", "English with Creative Writing BA",
        "Environmental Biology BSc", "Environmental Design and Architecture MEng",
        "Environmental Engineering BEng", "Environmental Engineering including an Industrial Year BEng",
        "Environmental Engineering including an Industrial Year MEng", "Environmental Engineering MEng",
        "Environmental Geoscience BSc", "Environmental Science BSc",
        "Environmental Science MSci"];

    var f_out = document.getElementById("f");
    var f_list = ["Film and Television Studies and American Studies BA","Film and Television Studies BA",
        "Finance, Accounting and Management BSc","Financial Mathematics BSc",
        "Food Science and Nutrition BSc","Food Science BSc",
        "French (Beginners) and another language BA (Modern Languages BA)","French and Contemporary Chinese Studies BA",
        "French and English BA","French and History BA",
        "French and International Media and Communications Studies BA","French and Philosophy BA",
        "French and Politics BA","French Studies BA",
        "French with another language BA (Modern Languages BA)"];

    var g_out = document.getElementById("g");
    var g_list = ["Genetics and Biochemistry BSc",
        "Genetics and Biochemistry MSci", "Genetics BSc","Genetics MSci", "Geography and Archaeology BA",
        "Geography BA","Geography BSc", "Geography MArts","Geography MSci",
        "Geography with Business BA","Geography with Chinese Studies BA",
        "German (Beginners) and another language BA (Modern Languages BA)","German and Contemporary Chinese Studies BA",
        "German and English Studies BA","German and History BA",
        "German and International Media and Communications Studies BA","German and Philosophy BA (2016 entry only)",
        "German and Politics BA","German BA",
        "German with another language BA (Modern Languages BA)","Global Issues and Contemporary Chinese Studies MSci",
        "Global Issues and International Relations MSci","Graduate Entry Medicine BMBS",
        "Graduate Entry Medicine BMBS", "Graduate Entry Medicine BMBS"];
    
    var h_out = document.getElementById("h");
    var h_list = ["Hispanic and English Studies BA","Hispanic Studies and History BA",
        "Hispanic Studies BA","Hispanic Studies with a language BA (Modern Languages BA)",
        "Historical Archaeology BA","History and American Studies BA",
        "History and Ancient History BA","History and Archaeology BA",
        "History and East European Cultural Studies BA","History and English BA",
        "History and French BA","History and German BA", "History and Hispanic Studies BA",
        "History and History of Art BA","History and Politics BA", "History BA","History of Art and English BA",
        "History of Art BA","History with Contemporary Chinese Studies BA",
        "Humanistic Counselling Practice BA"];

    var i_out = document.getElementById("i");
    var i_list = ["Industrial Economics BSc","Industrial Economics with Insurance BSc",
        "Integrated Agricultural Business Management BSc"," Integrated Agricultural Business Management with Industrial Placement Award BSc",
        "International Agricultural Science BSc","International Economics and Economics BA",
        "International Environmental Science BSc","International Environmental Science MSci",
        "International Management BSc"," International Media and Communications Studies and French BA",
        "International Media and Communications Studies BA","International Media Communications Studies and German BA",
        "International Media Communications Studies and Portuguese BA","International Media Communications Studies and Spanish BA",
        "International Relations and Global Issues MSci"];   

    var j_out = document.getElementById("j");
    var j_list = ["No courses found for letter 'J'"];

    var k_out = document.getElementById("k");
    var k_list = ["No courses found for letter 'K'"]

    var l_out = document.getElementById("l");
    var l_list = ["Latin BA","Law BA","Law LLB","Law with French and French Law BA","Law with German and German Law BA",
        "Law with Spanish and Spanish Law BA"];

    var m_out = document.getElementById("m");
    var m_list = ["Management BSc","Management with Chinese Studies BA", "Management with French BA",
        "Management with Spanish BA", "Manufacturing Engineering BEng","Manufacturing Engineering including an Industrial Year BEng",
        "Manufacturing Engineering including an Industrial Year MEng","Manufacturing Engineering MEng",
        "MArch Architecture (ARB/RIBA Part II)","Mathematical Physics BSc", "Mathematical Physics MSci",
        "Mathematics (International Study) BSc", "Mathematics and Economics BSc","Mathematics and Management BSc",
        "Mathematics BSc","Mathematics MMath", "Mechanical Engineering BEng"," Mechanical Engineering including an Industrial Year BEng",
        "Mechanical Engineering Including an Industrial Year MEng","Mechanical Engineering MEng",
        "Medical Physiology and Therapeutics BSc","Medicinal and Biological Chemistry BSc",
        "Medicinal and Biological Chemistry MSci","Medicinal and Biological Chemistry with an Assessed Year in Industry MSci",
        "Medicine BMBS","Medicine BMBS (Graduate Entry)", "Medicine with a Foundation Year BMBS","Microbiology BSc",
        "Midwifery BSc (Hons)","Modern European Studies BA",
        "Modern Language Studies BA","Modern Languages BA",
        "Modern Languages with Business BA","Modern Languages with Translation BA",
        "Molecular Physics and Chemistry BSc","Molecular Physics and Chemistry MSci",
        "Music and Philosophy BA", "Music BA"];
    
    var n_out = document.getElementById("n");
    var n_list = ["Natural Sciences BSc","Natural Sciences MSci", "Neuroscience BSc","Neuroscience MSci",
        "Nursing - Graduate Entry (MSc-GEN): (Adult)"," Nursing - Graduate Entry (MSc-GEN): (Child)",
        "Nursing - Graduate Entry (MSc-GEN): (Mental Health)","Nursing (Adult) BSc","Nursing (Adult) BSc",
        "Nursing (Mental Health) BSc", "Nutrition and Dietetics MNutr","Nutrition and Food Science BSc",
        "Nutrition BSc"];

    var o_out = document.getElementById("o");
    var o_list = ["No courses found for letter 'O'"];

    var p_out = document.getElementById("p");
    var p_list = ["Pharmacy (with Integrated Pre-registration Scheme) MPharm","Pharmacy MPharm",
        "Philosophy and Economics BA","Philosophy and English BA","Philosophy and French BA","Philosophy and German BA",
        "Philosophy and Theology BA","Philosophy BA","Philosophy, Politics and Economics BA","Physics and Philosophy BSc",
        "Physics BSc","Physics MSci","Physics with Astronomy BSc","Physics with Astronomy MSci",
        "Physics with European Language BSc","Physics with European Language MSci", "Physics with Medical Physics BSc",
        "Physics with Medical Physics MSci","Physics with Nanoscience BSc",
        "Physics with Nanoscience MSci","Physics with Theoretical Astrophysics BSc",
        "Physics with Theoretical Astrophysics MSci","Physics with Theoretical Physics BSc",
        "Physics with Theoretical Physics MSci","Physiotherapy BSc","Plant Science BSc","Politics and American Studies BA",
        "Politics and Economics BA","Politics and French BA","Politics and German BA","Politics and History BA",
        "Politics and International Relations BA","Portuguese (Beginners) and another language BA (Modern Languages BA)",
        "Portuguese and another language BA (Modern Languages BA)","Portuguese and International Media and Communications Studies BA",
        "Pre-Veterinary Science Certificate","Product Design and Manufacture BEng",
        "Product Design and Manufacture including an Industrial Year BEng","Product Design and Manufacture including an Industrial Year MEng",
        "Product Design and Manufacture MEng","Psychology and Cognitive Neuroscience BSc",
        "Psychology and Philosophy BSc","Psychology BSc","Psychology MSci"];
  
    var q_out = document.getElementById("q");
    var q_list = ["No courses found for letter 'Q'"];

    var r_out = document.getElementById("r");
    var r_list = ["Religion Culture and Ethics BA","Religion Philosophy and Ethics BA",
        "Renewable Energy Systems and Electrical Engineering BEng","Renewable Energy Systems and Electrical Engineering MEng",
        "Russian (Beginners) with another language BA (Modern Languages BA)","Russian and Contemporary Chinese Studies BA",
        "Russian and History BA","Russian Studies BA",
        "Russian with another language BA (Modern Languages BA)"];

    var s_out = document.getElementById("s");
    var s_list = ["Science Foundation Certificate","Science with Foundation Year BSc",
        "Science with Foundation Year MSci","Senior Status Law Degree LLB",
        "Social Sciences and Business Foundation Certificate","Social Work BA",
        "Sociology and Social Policy BA","Sociology BA",
        "Spanish (Beginners) and another language BA (Modern Languages BA)","Spanish (Beginners') with American Studies and Latin American Studies BA",
        "Spanish and Contemporary Chinese Studies BA","Spanish and International Media and Communications Studies BA",
        "Spanish with another language BA (Modern Languages BA)", "Sport Rehabilitation and Exercise Science BSc"];
 
    var t_out = document.getElementById("t");
    var t_list = ["Theology and Philosophy BA", "Theology and Religious Studies BA", "Tropical Sciences BSc"];

    var u_out = document.getElementById("u");
    var u_list = ["No courses found for letter 'U'"];

    var v_out = document.getElementById("v");
    var v_list = ["Veterinary Medicine and Surgery - BVM BVS with BVMed Sci","Veterinary Medicine and Surgery including a Gateway Year - BVM BVS with BVMed Sci",
    "Veterinary Medicine and Surgery including a Preliminary Year - BVM BVS with BVMed Sci", "Veterinary Science Pre-Veterinary Certificate",];

    var w_out = document.getElementById("w");
    var w_list = ["No courses found for letter 'W'"];

    var x_out = document.getElementById("x");
    var x_list = ["No courses found for letter 'X'"];

    var y_out = document.getElementById("y");
    var y_list = ["No courses found for letter 'Y'"];

    var z_out = document.getElementById("z");
    var z_list = ["Zoology BSc", "Zoology MSci"];

    function displayA_Z() {
        for (i = 0; i < a_list.length; i++) {
            a_out.appendChild(document.createTextNode(a_list[i])); //Add each course from array as text
            a_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            a_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < b_list.length; i++) {
            b_out.appendChild(document.createTextNode(b_list[i])); //Add each course from array as text
            b_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            b_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < c_list.length; i++) {
            c_out.appendChild(document.createTextNode(c_list[i])); //Add each course from array as text
            c_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            c_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < d_list.length; i++) {
            d_out.appendChild(document.createTextNode(d_list[i])); //Add each course from array as text
            d_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            d_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < e_list.length; i++) {
            e_out.appendChild(document.createTextNode(e_list[i])); //Add each course from array as text
            e_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            e_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < f_list.length; i++) {
            f_out.appendChild(document.createTextNode(f_list[i])); //Add each course from array as text
            f_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            f_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < g_list.length; i++) {
            g_out.appendChild(document.createTextNode(g_list[i])); //Add each course from array as text
            g_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            g_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < h_list.length; i++) {
            h_out.appendChild(document.createTextNode(h_list[i])); //Add each course from array as text
            h_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            h_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < i_list.length; i++) {
            i_out.appendChild(document.createTextNode(i_list[i])); //Add each course from array as text
            i_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            i_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < j_list.length; i++) {
            j_out.appendChild(document.createTextNode(j_list[i])); //Add each course from array as text
            j_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            j_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < k_list.length; i++) {
            k_out.appendChild(document.createTextNode(k_list[i])); //Add each course from array as text
            k_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            k_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < l_list.length; i++) {
            l_out.appendChild(document.createTextNode(l_list[i])); //Add each course from array as text
            l_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            l_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < m_list.length; i++) {
            m_out.appendChild(document.createTextNode(m_list[i])); //Add each course from array as text
            m_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            m_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < n_list.length; i++) {
            n_out.appendChild(document.createTextNode(n_list[i])); //Add each course from array as text
            n_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            n_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < o_list.length; i++) {
            o_out.appendChild(document.createTextNode(o_list[i])); //Add each course from array as text
            o_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            o_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < p_list.length; i++) {
            p_out.appendChild(document.createTextNode(p_list[i])); //Add each course from array as text
            p_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            p_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < q_list.length; i++) {
            q_out.appendChild(document.createTextNode(q_list[i])); //Add each course from array as text
            q_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            q_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < r_list.length; i++) {
            r_out.appendChild(document.createTextNode(r_list[i])); //Add each course from array as text
            r_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            r_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < s_list.length; i++) {
            s_out.appendChild(document.createTextNode(s_list[i])); //Add each course from array as text
            s_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            s_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < t_list.length; i++) {
            t_out.appendChild(document.createTextNode(t_list[i])); //Add each course from array as text
            t_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            t_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < u_list.length; i++) {
            u_out.appendChild(document.createTextNode(u_list[i])); //Add each course from array as text
            u_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            u_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < v_list.length; i++) {
            v_out.appendChild(document.createTextNode(v_list[i])); //Add each course from array as text
            v_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            v_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < w_list.length; i++) {
            w_out.appendChild(document.createTextNode(w_list[i])); //Add each course from array as text
            w_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            w_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < x_list.length; i++) {
            x_out.appendChild(document.createTextNode(x_list[i])); //Add each course from array as text
            x_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            x_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < y_list.length; i++) {
            y_out.appendChild(document.createTextNode(y_list[i])); //Add each course from array as text
            y_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            y_out.appendChild(document.createElement("br"));
        }
        for (i = 0; i < z_list.length; i++) {
            z_out.appendChild(document.createTextNode(z_list[i])); //Add each course from array as text
            z_out.appendChild(document.createElement("br")); //Append a break tag after each course within the loop
            z_out.appendChild(document.createElement("br"));
        }
    }
    displayA_Z(a_list, b_list, c_list, d_list, e_list, f_list, g_list, h_list, i_list, j_list, k_list,
               l_list, m_list, n_list, o_list, p_list, q_list, r_list, s_list, t_list, u_list, v_list,
               w_list, x_list, y_list, z_list);