---
title: "Contact Us"
description: "Get in touch with AURAE VENUIS. Questions, ideas, or just want to say hello? Drop us a message."
layout: "single"
---

<style>
/* ---------- HIDE DEFAULT THEME TITLE ---------- */
.page-header, .post-header, .entry-header, 
.page-title, .post-title, .entry-title, 
.single-title, main > header:not(.hero), main > h1:not(.hero h1) { display: none !important; }

/* ---------- VARIABLES ---------- */
:root {
--bg-dark: #050505;
--card-bg: #111111;
--input-bg: #0a0a0a;
--border: #222222;
--text-main: #ffffff;
--text-muted: #888888;
--gold: #b08d57;
--gold-glow: rgba(176, 141, 87, 0.15);
--body: 'Inter', -apple-system, sans-serif;
}

/* ---------- PAGE WRAPPER ---------- */
.page { overflow-x: hidden; font-family: var(--body); background: var(--bg-dark); color: var(--text-main); min-height: 100vh; display: flex; align-items: center; padding: 80px 0; position: relative; }
.page a { color: var(--text-muted); text-decoration: none; transition: color 0.3s ease; }
.page a:hover { color: var(--gold); }

/* BACKGROUND TEXT & GLOW */
.page::before {
content: "CONTACT";
position: absolute;
top: 50%; left: 50%;
transform: translate(-50%, -50%);
font-family: var(--body);
font-size: 25vw;
font-weight: 800;
color: rgba(255, 255, 255, 0.02);
white-space: nowrap;
pointer-events: none;
z-index: 1;
letter-spacing: -0.05em;
}
.page::after {
content: "";
position: absolute;
top: 0; right: 0;
width: 600px; height: 600px;
background: radial-gradient(circle, var(--gold-glow) 0%, transparent 60%);
pointer-events: none;
z-index: 1;
}

/* ---------- CONTAINER (Wider Layout) ---------- */
.page .contact-container { max-width: 1400px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 10; width: 100%; display: grid; grid-template-columns: 1fr 1.1fr; gap: 100px; align-items: center; }

/* ---------- LEFT SIDE: INFO ---------- */
.page .info-side { max-width: 500px; }
.page .badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 50px; font-size: 13px; color: var(--text-main); margin-bottom: 30px; }
.page .badge svg { color: var(--gold); }
.page h1 { font-family: var(--body); font-size: clamp(40px, 5vw, 56px); font-weight: 600; line-height: 1.1; margin: 0 0 20px; letter-spacing: -0.03em; }
.page .info-side p { font-size: 16px; color: var(--text-muted); line-height: 1.6; margin-bottom: 40px; max-width: 400px; }

/* CARDS */
.page .contact-card { display: flex; align-items: center; justify-content: space-between; background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 18px 24px; margin-bottom: 16px; transition: border-color 0.3s ease; text-decoration: none; }
.page .contact-card:hover { border-color: #444; }
.page .card-left { display: flex; align-items: center; gap: 20px; }
.page .icon-box { width: 44px; height: 44px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--text-main); }
.page .card-text span { display: block; font-size: 12px; color: var(--text-muted); margin-bottom: 4px; }
.page .card-text strong { display: block; font-size: 15px; color: var(--text-main); font-weight: 500; }
.page .arrow-box { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: var(--text-main); transition: background 0.3s ease, color 0.3s ease; }
.page .contact-card:hover .arrow-box { background: var(--gold); color: #000; }

/* ---------- RIGHT SIDE: FORM ---------- */
.page .form-side { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 50px; }
.page .form-group { margin-bottom: 24px; }
.page .form-group label { display: block; font-size: 13px; color: var(--text-muted); margin-bottom: 8px; }
.page .form-group input, 
.page .form-group textarea { 
width: 100%; 
padding: 16px 20px; 
font-family: var(--body); 
font-size: 15px; 
color: var(--text-main); 
background: var(--input-bg); 
border: 1px solid var(--border); 
border-radius: 8px; 
transition: all 0.3s ease;
}
.page .form-group input::placeholder, 
.page .form-group textarea::placeholder { color: #555; }
.page .form-group input:focus, 
.page .form-group textarea:focus { 
outline: none; 
border-color: var(--gold); 
box-shadow: 0 0 0 3px rgba(176, 141, 87, 0.1);
}
.page .form-group textarea { resize: vertical; min-height: 180px; }

/* BUTTON */
.page .submit-btn { 
width: 100%; 
padding: 18px; 
background: #ffffff; 
color: #000000; 
font-family: var(--body); 
font-size: 15px; 
font-weight: 600; 
border: none; 
border-radius: 8px; 
cursor: pointer; 
transition: background 0.3s ease, transform 0.2s ease;
margin-top: 10px;
}
.page .submit-btn:hover { background: #e0e0e0; transform: translateY(-1px); }
.page .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

/* STATUS MESSAGES */
.page .form-status { display: none; padding: 15px; font-size: 14px; margin-bottom: 20px; border-radius: 8px; text-align: center; }
.page .form-status.success { display: block; background: rgba(76, 175, 80, 0.1); color: #4caf50; border: 1px solid #4caf50; }
.page .form-status.error { display: block; background: rgba(244, 67, 54, 0.1); color: #f44336; border: 1px solid #f44336; }

/* RESPONSIVE */
@media (max-width: 1100px) {
.page .contact-container { grid-template-columns: 1fr; gap: 60px; }
.page .info-side { max-width: 100%; text-align: center; }
.page .info-side p { margin: 0 auto 40px; }
.page .form-side { padding: 40px 30px; }
}
@media (max-width: 600px) {
.page .contact-container { padding: 0 20px; }
.page .form-side { padding: 30px 20px; }
}
</style>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

<main class="page">
<div class="contact-container">

<!-- LEFT SIDE -->
<div class="info-side">
<div class="badge">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
Contact
</div>
<h1>Get in touch</h1>
<p>Have questions or ready to transform your space with AURAE VENUIS?</p>

<!-- Card 1: Email -->
<a href="mailto:hello@aurae-venuis.com" class="contact-card">
<div class="card-left">
<div class="icon-box">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
</div>
<div class="card-text">
<span>Email us</span>
<strong>hello@aurae-venuis.com</strong>
</div>
</div>
<div class="arrow-box">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</a>

<!-- Card 2: Response Time (No Phone Number) -->
<div class="contact-card" style="cursor: default;">
<div class="card-left">
<div class="icon-box">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div class="card-text">
<span>Response Time</span>
<strong>Within 1–2 Business Days</strong>
</div>
</div>
</div>

<!-- Card 3: Instagram/Social (No Phone Number) -->
<a href="#" class="contact-card">
<div class="card-left">
<div class="icon-box">
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
</div>
<div class="card-text">
<span>Follow Us</span>
<strong>@auraevenuis</strong>
</div>
</div>
<div class="arrow-box">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</a>
</div>

<!-- RIGHT SIDE -->
<div class="form-side">
<div id="form-status" class="form-status"></div>

<form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
<input type="hidden" name="access_key" value="a17fce0e-1cea-40b9-b38d-689c02903d04">
<input type="checkbox" name="botcheck" style="display:none">

<div class="form-group">
<input type="text" id="name" name="name" placeholder="Name" required>
</div>

<div class="form-group">
<input type="email" id="email" name="email" placeholder="Email" required>
</div>

<div class="form-group">
<textarea id="message" name="message" placeholder="Message" required></textarea>
</div>

<button type="submit" class="submit-btn">
<span>Submit</span>
</button>

</form>
</div>

</div>
</main>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('form-status');
    const originalBtnText = submitBtn.innerHTML;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        submitBtn.innerHTML = "Sending...";
        submitBtn.disabled = true;
        statusDiv.className = "form-status";
        statusDiv.style.display = "none";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            
            if (response.ok) {
                statusDiv.className = "form-status success";
                statusDiv.innerHTML = "Thank you. Your message has been received.";
                form.reset();
            } else {
                statusDiv.className = "form-status error";
                statusDiv.innerHTML = "Error: " + data.message;
            }
        } catch (error) {
            statusDiv.className = "form-status error";
            statusDiv.innerHTML = "Network error. Please try again.";
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});
</script>