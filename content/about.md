---
title: "About Us"
description: "Meet AURAE VENUIS, a home décor destination for interior inspiration, thoughtful decorating ideas, and beautiful spaces."
layout: "single"
---

<style>
:root {
--cream: #faf7f1;
--ink: #1c1a16;
--ink-soft: #3d3830;
--muted: #6e685e;
--gold: #b08d57;
--gold-soft: #c9ad7e;
--line: #e2d8c7;
--display: 'Cormorant Garamond', Georgia, serif;
--body: 'Inter', -apple-system, sans-serif;
--max: 1180px;
--max-text: 720px;
}
.page { overflow-x: hidden; font-family: var(--body); color: var(--ink); }
.page .eyebrow { display: inline-block; font-family: var(--body); font-size: 11px; font-weight: 500; letter-spacing: 0.32em; text-transform: uppercase; color: var(--gold); }
.page h1, .page h2, .page h3 { font-family: var(--display); font-weight: 400; color: var(--ink); letter-spacing: -0.01em; margin: 0; }
.page p { margin: 0 0 1.1em; }
.page em { font-style: italic; }
.page .hero { padding: 130px 32px 120px; text-align: center; background: radial-gradient(ellipse at 50% -10%, rgba(176, 141, 87, 0.10) 0%, transparent 55%), var(--cream); border-bottom: 1px solid var(--line); }
.page .hero .eyebrow { margin-bottom: 26px; }
.page .hero h1 { font-size: clamp(38px, 6.4vw, 76px); line-height: 1.08; max-width: 900px; margin: 0 auto 8px; }
.page .hero h1 em { font-style: italic; color: var(--gold); }
.page .ornament { display: flex; align-items: center; justify-content: center; gap: 14px; margin: 34px auto 32px; }
.page .ornament span { width: 44px; height: 1px; background: var(--gold); display: block; }
.page .ornament i { width: 5px; height: 5px; background: var(--gold); transform: rotate(45deg); display: block; }
.page .hero .lead { max-width: 620px; margin: 0 auto; font-family: var(--display); font-size: clamp(18px, 1.6vw, 22px); line-height: 1.55; font-style: italic; color: var(--ink-soft); font-weight: 300; }
.page section { padding: 110px 32px; }
.page .container { max-width: var(--max); margin: 0 auto; }
.page .container-text { max-width: var(--max-text); margin: 0 auto; }
.page .section-head { text-align: center; margin-bottom: 60px; }
.page .section-head .eyebrow { margin-bottom: 16px; }
.page .section-head h2 { font-size: clamp(30px, 4.2vw, 48px); line-height: 1.15; margin-bottom: 18px; }
.page .section-head p { font-size: 17px; color: var(--muted); max-width: 560px; margin: 0 auto; line-height: 1.7; }
.page .story { background: #ffffff; padding: 120px 32px; }
.page .story h2 { font-size: clamp(30px, 4vw, 46px); margin: 16px 0 32px; line-height: 1.15; }
.page .story p { font-size: 17.5px; line-height: 1.85; color: var(--ink-soft); }
.page .story p.dropcap::first-letter { font-family: var(--display); font-size: 4.6em; float: left; line-height: 0.82; margin: 0.06em 0.1em 0 0; color: var(--gold); font-weight: 500; }
.page .features { background: var(--cream); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.page .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); }
.page .card { background: var(--cream); padding: 42px 34px 44px; transition: background .4s ease; position: relative; }
.page .card::after { content: ""; position: absolute; left: 34px; right: 34px; bottom: 0; height: 1px; background: var(--gold); transform: scaleX(0); transform-origin: left; transition: transform .5s cubic-bezier(.2,.7,.2,1); }
.page .card:hover { background: #ffffff; }
.page .card:hover::after { transform: scaleX(1); }
.page .card .num { display: block; font-size: 11px; letter-spacing: 0.28em; color: var(--gold); margin-bottom: 26px; text-transform: uppercase; }
.page .card h3 { font-size: 24px; line-height: 1.25; margin-bottom: 14px; }
.page .card p { font-size: 15px; line-height: 1.75; color: var(--muted); margin: 0; }
.page .quote { background: var(--ink); color: var(--cream); padding: 130px 32px; text-align: center; position: relative; }
.page .quote::before { content: ""; position: absolute; top: 60px; left: 50%; width: 6px; height: 6px; background: var(--gold); transform: translateX(-50%) rotate(45deg); }
.page .quote blockquote { max-width: 900px; margin: 0 auto; font-family: var(--display); font-style: italic; font-weight: 300; font-size: clamp(26px, 3.6vw, 42px); line-height: 1.35; color: var(--cream); }
.page .quote cite { display: block; margin-top: 36px; font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold-soft); font-style: normal; }
.page .values { background: #ffffff; }
.page .values-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 55px 80px; max-width: 980px; margin: 0 auto; }
.page .value { padding-top: 26px; border-top: 1px solid var(--line); }
.page .value h3 { font-size: 26px; line-height: 1.25; margin-bottom: 14px; }
.page .value p { font-size: 16px; line-height: 1.8; color: var(--muted); margin: 0; }
.page .closing { background: var(--cream); text-align: center; padding: 130px 32px 140px; border-top: 1px solid var(--line); }
.page .closing .eyebrow { margin-bottom: 22px; }
.page .closing h2 { font-size: clamp(30px, 4.4vw, 52px); line-height: 1.15; max-width: 780px; margin: 0 auto 26px; }
.page .closing p { font-size: 17.5px; line-height: 1.85; color: var(--ink-soft); max-width: 620px; margin: 0 auto 20px; }
.page .closing .signature { margin-top: 46px; font-family: var(--display); font-style: italic; font-size: 20px; color: var(--gold); }
.page .closing .links { margin-top: 34px; font-size: 14px; color: var(--muted); }
.page .closing .links a { color: var(--ink); border-bottom: 1px solid var(--gold); text-decoration: none; }
.page .closing .links a:hover { color: var(--gold); }
.js .page .reveal { opacity: 0; transform: translateY(28px); transition: opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1); transition-delay: var(--d, 0s); }
.js .page .reveal.in { opacity: 1; transform: translateY(0); }
.page .feature-grid .card:nth-child(1) { --d: 0s; } .page .feature-grid .card:nth-child(2) { --d: 0.08s; } .page .feature-grid .card:nth-child(3) { --d: 0.16s; }
.page .feature-grid .card:nth-child(4) { --d: 0.24s; } .page .feature-grid .card:nth-child(5) { --d: 0.32s; } .page .feature-grid .card:nth-child(6) { --d: 0.40s; }
.page .values-grid .value:nth-child(1) { --d: 0s; } .page .values-grid .value:nth-child(2) { --d: 0.10s; } .page .values-grid .value:nth-child(3) { --d: 0.20s; } .page .values-grid .value:nth-child(4) { --d: 0.30s; }
@media (max-width: 960px) {
.page .hero { padding: 100px 24px 90px; }
.page section { padding: 90px 24px; }
.page .feature-grid { grid-template-columns: 1fr 1fr; }
.page .values-grid { gap: 40px 50px; }
.page .quote { padding: 100px 24px; }
.page .closing { padding: 100px 24px 110px; }
}
@media (max-width: 700px) {
.page .hero { padding: 78px 22px 70px; }
.page section { padding: 74px 22px; }
.page .story { padding: 84px 22px; }
.page .hero h1 { font-size: clamp(34px, 9vw, 46px); }
.page .feature-grid, .page .values-grid { grid-template-columns: 1fr; gap: 34px; }
.page .card { padding: 34px 26px 38px; }
}
</style>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

<main class="page">
<article>

<header class="hero">
<span class="eyebrow">About AURAE VENUIS</span>
<h1>A home should feel like <em>you</em>.<br>Not like a showroom.</h1>
<div class="ornament" aria-hidden="true">
<span></span><i></i><span></span>
</div>
<p class="lead">A small home décor journal for people who care about how their space feels — not just how it looks.</p>
</header>

<section class="story">
<div class="container-text">
<span class="eyebrow reveal">Why we exist</span>
<h2 class="reveal">The reason we started this.</h2>
<p class="dropcap reveal">So here's where we're coming from. Most of us don't live in a magazine. Our homes have mismatched furniture, a chair that's been needing to be reupholstered for three years, and at least one corner that never quite came together. And honestly, that's fine.</p>
<p class="reveal">We started AURAE VENUIS because we kept noticing the same thing. The rooms people love most — the ones they actually relax in — rarely look like the ones in the glossy photos. They look lived in. They look personal. And that's exactly what makes them beautiful.</p>
<p class="reveal">We're not designers. We're not here to tell you what's "in" this season or sell you a look. We're here for the people standing in a room thinking, "I know this could feel better. I just don't know where to start."</p>
<p class="reveal">If that sounds like you, you're in the right place.</p>
</div>
</section>

<section class="features">
<div class="container">
<div class="section-head">
<span class="eyebrow reveal">What you'll find here</span>
<h2 class="reveal">A little of everything.<br>Nothing complicated.</h2>
<p class="reveal">Think of this place as a friend with good taste and no agenda. Here's what we cover.</p>
</div>
<div class="feature-grid">
<article class="card reveal">
<span class="num">01 &nbsp;/&nbsp; Décor</span>
<h3>Home Décor Ideas</h3>
<p>Colours, textures, and small changes that make a room feel new — without starting over.</p>
</article>
<article class="card reveal">
<span class="num">02 &nbsp;/&nbsp; Interiors</span>
<h3>Interior Inspiration</h3>
<p>Real rooms, honest ideas, and styles you can actually recreate in your own home.</p>
</article>
<article class="card reveal">
<span class="num">03 &nbsp;/&nbsp; Living</span>
<h3>Everyday Spaces</h3>
<p>Living rooms, bedrooms, kitchens — even the hallway you don't quite know what to do with.</p>
</article>
<article class="card reveal">
<span class="num">04 &nbsp;/&nbsp; Details</span>
<h3>Furniture &amp; Accessories</h3>
<p>How a rug, a mirror, or one good lamp can change the whole feel of a room.</p>
</article>
<article class="card reveal">
<span class="num">05 &nbsp;/&nbsp; Style</span>
<h3>Personal Style</h3>
<p>Some of us love minimal. Some of us want a little more. Both are welcome here.</p>
</article>
<article class="card reveal">
<span class="num">06 &nbsp;/&nbsp; Ideas</span>
<h3>Practical Help</h3>
<p>Ideas that work in real homes — small spaces, tight budgets, busy lives.</p>
</article>
</div>
</div>
</section>

<section class="quote">
<blockquote class="reveal">
The best rooms aren't the prettiest ones. They're the ones that feel like the person who lives there.
<cite>A thought we keep coming back to</cite>
</blockquote>
</section>

<section class="values">
<div class="container">
<div class="section-head">
<span class="eyebrow reveal">What we believe</span>
<h2 class="reveal">Four things we never compromise on.</h2>
</div>
<div class="values-grid">
<div class="value reveal">
<h3>Comfort comes first.</h3>
<p>A room that looks perfect but isn't comfortable isn't really finished. We think about how a space feels before we think about how it looks.</p>
</div>
<div class="value reveal">
<h3>Every home is different.</h3>
<p>Your home should reflect your life — not someone else's idea of what a home should be.</p>
</div>
<div class="value reveal">
<h3>Simple is enough.</h3>
<p>You don't need to fill every corner. A few well-chosen pieces often do more than a room full of stuff.</p>
</div>
<div class="value reveal">
<h3>Real life matters.</h3>
<p>Space, budget, kids, pets, small apartments — the ideas we share are made to work inside all of that.</p>
</div>
</div>
</div>
</section>

<footer class="closing">
<span class="eyebrow reveal">Come on in</span>
<h2 class="reveal">Make your space a place you're glad to come home to.</h2>
<p class="reveal">We're really glad you're here. Look around. Take what helps. Leave what doesn't. And if you find one idea that makes your home feel a little more like yours, we've done our job.</p>
<p class="reveal links">New here? Start with <a href="/blog/">our journal</a>. Want to say hello? <a href="/contact/">Drop us a note</a>.</p>
<div class="signature reveal">— AURAE VENUIS</div>
</footer>

</article>
</main>

<script>
document.documentElement.classList.add('js');
(function () {
if (!('IntersectionObserver' in window)) {
document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
return;
}
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('in');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
})();
</script>