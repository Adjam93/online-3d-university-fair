    var i;
    var a_out = document.getElementById("a2");
    var a_list = ["Accounting (Joint Honours) BA/BSc (Hons)","Accounting and Finance BSc (Hons)",
                  "Accounting and Finance BSc (Hons)","Acting BA (Hons)",
                    "Acting (Creative Theatre) BA","Adult Nursing BSc (Hons)","Advertising (Joint Honours) BA/BSc (Hons)",
                    "Advertising and Digital Marketing BA (Hons)", "American Sports Business Management BA",
                    "Applied Criminal Justice Studies (top-up) BA (Hons)","Applied Criminal Justice (top-up) BA",
                    "Architectural Technology BSc (Hons)", "Architectural Technology (with Foundation Year)"];

    var b_out = document.getElementById("b2");
    var b_list = ["Banking and Financial Planning BSc (Hons)", "Biology BSc (Hons)",
        "Business (Joint Honours) BA/Bsc (Hons)", "Business and Management (top-up) BA (Hons)",
        "Business Entrepreneurship (Joint Honours) BA/BSc (Hons)", "Business Entrepreneurship BA (Hons)",
        "Business Entrepreneurship FdA", "Business HND",
        "Business Studies BA (Hons)", "Business Computing (Systems) BSc (Hons)",
        "Business Computing (Systems) HND", "Business Computing (Web Design) BSc (Hons)",
        "Business Computing Systems (top-up) BSc (Hons)", "Business Computing Systems (Web Design) HND"];

    var c_out = document.getElementById("c2");
    var c_list = ["Childhood and Youth BA (Hons)", "Child Nursing BSc (Hons)",
        "Commercial and Creative Photography HND", "Computing (Computer Networks Engineering) BEng (Hons)/MEng",
        "Computing (Computer Systems Engineering) BEng (Hons)/ MEng", "Computing (Computer Systems Engineering) HND",
        "Computing (Graphics and Visualisation) BSc (Hons)", "Computing (Graphics and Visualisation) HND",
        "Computing (Mobile Computing) BSc (Hons)", "Computing (Mobile Computing) HND",
        "Computing (Software Engineering) BSc (Hons)", "Computing (Software Engineering) HND",
        "Computing (Web Technology and Security) BSc (Hons)", "Computing (Web Technology and Security) HND",
        "Computing BSc (Hons)", "Computing HND",
        "Computer Games Development BSc (Hons)", "Computer Games Development HND",
        "Creative Writing (Joint honours) BA (Hons)", "Creative Writing BA (Hons)",
        "Criminology (Joint Honours) BA/BSc (Hons)", "Criminology BA (Hons)"];

    var d_out = document.getElementById("d2");
    var d_list = ["Dental Nursing FdSc", "Digital Film Production HND",
        "Drama (Joint Honours) BA/BSc (Hons)", "Drama BA (Hons)", "Developmental and Educational Psychology BSc (Hons)"];

    var e_out = document.getElementById("e2");
    var e_list = ["Early Childhood Studies (top-up) BA (Hons)", "Early Childhood Studies BA (Hons)",
        "Early Years Education (QTS) BA (Hons)", "Early Years FdA",
        "Economics (Joint Honours) BA/BSc (Hons)", "Economics BA (Hons)",
        "Education Studies (Joint Honours) BA/BSc  (Hons)", "Education Studies BA (Hons)",
        "Electrical and Electronic Engineering BEng (Hons)/MEng", "Electromechanical Engineering BEng (Hons)/MEng",
        "Engineering (top-up) BSc (Hons)", "Engineering BSc (Hons)",
        "Engineering HNC", "Engineering HND","English (Joint Honours) BA/BSc (Hons)", "English BA (Hons)",
        "Environmental Science (Climate Change) BSc (Hons)", "Environmental Science (Landscape Ecology) BSc (Hons)",
        "Environmental Science (Wastes) BSc (Hons)", "Environmental Science BSc (Hons)",
        "Events Management (Joint Honours) BA/BSc (Hons)", "Events Management BA (Hons)"];

    var f_out = document.getElementById("f2");
    var f_list = ["Fashion (Textiles for Fashion) BA (Hons)","Fashion BA (Hons)","Fashion Marketing BA (Hons)",
        "Film and Screen Studies (Joint Honours) BA (Hons)","Fine Art BA (Hons)","Fine Art Painting and Drawing (BA) Hons",
        "Footwear and Accessories BA (Hons)","Foundation Diploma in Art and Design",
        "Foundation Degree in Early Years", "Foundation Degree in Learning and Teaching",];

    var g_out = document.getElementById("g2");
    var g_list = ["Games Art BA (Hons)","Geography (Human Geography) BSc (Hons)","Geography (Physical Geography) BSc (Hons)",
        "Geography BSc (Hons)", "Graphic Communication BA (Hons)",];

    var h_out = document.getElementById("h2");
    var h_list = ["Health and Social Care (top-up) BSc (Hons)", "Health and Social Care FdSc (closed for 2015 entry)", 
        "Health Studies (Joint Honours) BA/BSc (Hons)", "History (Joint Honours) BA/BSc (Hons)",
        "History BA (Hons)", "Human Geography (Joint Honours) BA/BSc (Hons)",
        "Human Resource Management BA (Hons)", "Human Resource Management (Joint Honours) BA/BSc (Hons)",];

    var i_out = document.getElementById("i2");
    var i_list = ["Illustration BA (Hons)", "Interior Design BA (Hons)","International Accounting (top-up) BA (Hons)",
        "International Business BA (Hons)", "International Business Communications (top-up) BA Hons", 
        "International Business Communications (top-up) BA Hons", 
        "International Development (Joint Honours) BA/ BSc (Hons)", "International Development BA (Hons)",
        "International Logistics and Trade Finance (top-up) BA Hons", "International Relations and Politics BA (Hons)",
        "International Tourism Management BA (Hons)", "International Tourism Management (top-up) BA (Hons)",
        "International Tourism Management (Joint Honours) BA/ BSc (Hons)"];

    var j_out = document.getElementById("j2");
    var j_list = ["No courses found for letter 'J'"];

    var k_out = document.getElementById("k2");
    var k_list = ["No courses found for letter 'K'"]

    var l_out = document.getElementById("l2");
    var l_list = ["Law LLB (Hons)","Law (two-year intensive) LLB (Hons)",
        "Law (Joint Honours) BA/BSc (Hons)","Learning and Teaching FdA",
        "Learning and Teaching (top-up) BA (Hons)","Learning Disability Nursing BSc (Hons)",
        "Leathersellers’ Certificate (Leather Science, Marketing or Business)",
        "Leathersellers’ Diploma (Leather Science, Marketing or Business) University Diploma",
        "Leather Technology (Leather Science, Marketing or Business) BSc (Hons)",
        "Leather Technology (Leather Science, Marketing or Business) (top-up) BSc (Hons)"];

    var m_out = document.getElementById("m2");
    var m_list = ["Management BA (Hons)","Management (Joint Honours) BA/BSc (Hons)","Management Intensive BA (Hons)",
        "Marketing (Joint Honours) BA/BSc (Hons)"," Marketing Management (top-up) BA (Hons)","Marketing Management BSc (Hons)",
        "Mechanical Engineering BEng (Hons)/MEng","Mental Health Nursing BSc (Hons)",
        "Media Production and Moving Image BA (Hons)","Media Production and Moving Image (Joint Honours) BA/BSc (Hons)",
        "Midwifery Long Programme BSc (Hons) (closed for 2015 entry)","Multimedia Journalism (Joint Honours) BA/BSc (Hons)",
        "Multimedia Journalism BA (Hons)","Music Production HND",];

    var n_out = document.getElementById("n2");
    var n_list = ["No courses found for letter 'N'"];

    var o_out = document.getElementById("o2");
    var o_list = ["Occupational Therapy BSc (Hons)"];

    var p_out = document.getElementById("p2");
    var p_list = ["Paramedic Science BSc","Paramedic Science FdSc",
        "Photography BA (Hons)","Photography (top-up) BA (Hons)",
        "Podiatry BSc (Hons)","Policing BA (Hons)",
        "Popular Music BA (Hons)","Popular Music (Joint Honours) BA/BSc (Hons)",
        "Primary Education (QTS) BA (Hons)","Product Design HND",
        "Product Design BSc (Hons)","Professional Investigative Practice BA (Hons)",
        "Psychology BSc (Hons)","Psychology and Counselling BSc (Hons)",
        "Psychology (Joint Honours) BA/BSc (Hons)"];  

    var q_out = document.getElementById("q2");
    var q_list = ["No courses found for letter 'Q'"];

    var r_out = document.getElementById("r2");
    var r_list = ["No courses found for letter 'R'"];

    var s_out = document.getElementById("s2");
    var s_list = ["Social and Community Development BA (Hons)","Social Work BA (Hons)",
        "Social Care (Joint Honours) BA/BSc (Hons)"," Sociology (Joint Honours) BA/BSc (Hons)",
        "Sociology BA (Hons)","Special Education Needs and Inclusion BA (Hons)",
        "Sport and Exercise Science BSc (Hons)","Sport Development and Physical Education BA (Hons)",
        "Sports Marketing Management BA (Hons)", "Sport Studies (Joint Honours) BA/BSc (Hons)",];

    var t_out = document.getElementById("t2");
    var t_list = ["Theatre Practice HND", "Travel and Tourism Management HND"];

    var u_out = document.getElementById("u2");
    var u_list = ["No courses found for letter 'U'"];

    var v_out = document.getElementById("v2");
    var v_list = ["No courses found for letter 'V'"];

    var w_out = document.getElementById("w2");
    var w_list = ["No courses found for letter 'W'"];

    var x_out = document.getElementById("x2");
    var x_list = ["No courses found for letter 'X'"];

    var y_out = document.getElementById("y2");
    var y_list = ["No courses found for letter 'Y'"];

    var z_out = document.getElementById("z2");
    var z_list = ["No courses found for letter 'Z'"];

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