
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 's1',
    name: 'Hardware Supply',
    tagline: 'Wholesale & Retail',
    description: 'Complete computer hardware maintenance and supply. Desktops, laptops, toners, and networking equipment.',
    longDescription: 'nworksinc specializes in the sale of computer hardware. We sell in wholesale as well as retail, supplying you with desktops, laptops, and accessories at affordable prices. We stock both new machines and slightly used branded computers which are as good as new. Our inventory includes toners, cartridges, printers, and full networking equipment solutions.',
    price: 0, // 0 indicates "Request Quote"
    category: 'Hardware',
    imageUrl: 'https://images.unsplash.com/photo-1597872250449-66ca64d3158a?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1588872657578-a83a04963d20?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Desktops & Laptops', 'Toners & Cartridges', 'Printers', 'Networking Equipment']
  },
  {
    id: 's2',
    name: 'Creative Design',
    tagline: 'Visual Identity',
    description: 'Beautiful designs including logos, brochures, magazines, ads, and web banners.',
    longDescription: 'We use current designing software and tools to come up with beautiful designs. Our portfolio includes logos, brochures, magazines, ads for online or print, trade show displays, web banners, illustrations, and photo graphic design. We also offer advertising consultancy, corporate graphic design, and brand promotion services tailored to your specific needs.',
    price: 0,
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1558655146-d09347e0c766?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Logo Design', 'Brochures & Magazines', 'Web Banners', 'Brand Promotion']
  },
  {
    id: 's3',
    name: 'Branding Solutions',
    tagline: 'Make Your Mark',
    description: 'Merchandise branding, signage, wall branding, and vehicle branding services.',
    longDescription: 'We offer comprehensive branding solutions. Merchandise branding includes T-shirts, Caps, banners, billboards, posters, flyers, calendars, magazines, stickers, and engraved signs. We utilize screen printing, digital printing, sublimation, heat transfer, embroidery, and laser etching. Additionally, our signage and wall branding services offer cost-effective outdoor advertising, covering several areas within Kenya.',
    price: 0,
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1565514020176-35f2ae4ce933?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Stationery & Merchandise', 'Signage', 'Wall Branding', 'Vehicle Branding']
  },
  {
    id: 's4',
    name: 'Digital Media',
    tagline: 'Capture Moments',
    description: 'Corporate shoots, event coverage, and product photography with a focus on storytelling.',
    longDescription: 'nworksinc studios is dedicated to a new style of media creation that focuses on the message relayed by a photograph or video. From advanced camera skill sets to sophisticated know-how, we bring simplicity and crisp clarity to unique productions. We cover corporate and portrait shoots, events and private functions, stock/advertising photography, and product launches. We don’t just take pictures; we capture moments.',
    price: 0,
    category: 'Media',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1551378560-a3dc4553131d?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Corporate Shoots', 'Event Coverage', 'Product Photography', 'Product Launches']
  },
  {
    id: 's5',
    name: 'Lworks Leather',
    tagline: 'Custom & Elegant',
    description: 'Premium leather products, branding, and engraving. Customized wallets and accessories.',
    longDescription: 'Lworks leather handles leather products branding and engraving. We use our creative eye beyond the boundaries of modernization in leather accessories to fashion. Culture is our key reference to the brand’s core business. We create customized products for your specific clients and offer various types of leather wallets in all colors available by order.',
    price: 4500, // Assuming KSh for wallet equivalent
    category: 'Leather',
    imageUrl: 'https://images.unsplash.com/photo-1584897761939-9d9b0d156b66?auto=format&fit=crop&q=80&w=1000',
    gallery: [
        'https://images.unsplash.com/photo-1627123424574-181ce5171c98?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Custom Wallets', 'Engraving', 'Leather Accessories', 'Corporate Gifts']
  },
  {
    id: 'm1',
    name: 'nworksinc Hoodie',
    tagline: 'Street Style',
    description: 'Premium heavyweight cotton hoodie with nworksinc logo.',
    longDescription: 'Stay warm and stylish with our premium nworksinc hoodie. Crafted from a heavy cotton blend for durability and comfort, this hoodie features our signature nworksinc logo. Available in Black, Neon Green, Purple, and Red to suit your style.',
    price: 3000,
    category: 'Merchandise',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1578587018452-892bace13f1c?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Heavyweight Cotton Blend', 'Multiple Colors (Black, Green, Purple, Red)', 'Durable Print', 'Unisex Fit']
  },
  {
    id: 'm2',
    name: 'nworksinc T-Shirt',
    tagline: 'Everyday Essential',
    description: 'Classic fit cotton t-shirt featuring the nworksinc brand.',
    longDescription: 'Our classic nworksinc t-shirt is an everyday essential. Made from 100% soft cotton, it provides a comfortable fit for daily wear. Show your support with the branded nworksinc logo. Available in Black, Purple, Red, and White.',
    price: 1000,
    category: 'Merchandise',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['100% Cotton', 'Classic Fit', 'Breathable Fabric', 'Variety of Colors']
  },
  {
    id: 'm3',
    name: 'nworksinc Trucker Hat',
    tagline: 'Headwear',
    description: 'Adjustable mesh back trucker hat with embroidered logo.',
    longDescription: 'Top off your look with the nworksinc trucker hat. Featuring a breathable mesh back and adjustable snap closure, it fits all sizes comfortably. The embroidered logo adds a premium touch. Available in Black, White/Black, Blue/White, and Red/White.',
    price: 1000,
    category: 'Merchandise',
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Adjustable Snapback', 'Breathable Mesh', 'Embroidered Logo', 'One Size Fits All']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "Our Vision & Mission",
        date: "Corporate Profile",
        excerpt: "Creating unique design & experiences while ensuring financial growth by providing excellent customer services.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-[#0F172A]" }, "Our Vision"),
            React.createElement("p", { className: "mb-6 text-[#475569]" },
                "To provide artistically satisfying and exquisite products to our clients' tastes."
            ),
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-[#0F172A]" }, "Our Mission"),
            React.createElement("p", { className: "mb-8 text-[#475569]" },
                "Creating unique design & experiences while ensuring financial growth by providing excellent customer services."
            ),
             React.createElement("blockquote", { className: "border-l-4 border-[#0284C7] pl-6 italic text-xl text-[#0F172A] my-10 font-serif" },
                "\"Formed in a humble idea of a childhood dream. With team spirit, transparency, discipline and coordination we work on giving our clients the best customer experience.\""
            )
        )
    },
    {
        id: 2,
        title: "Why Choose nworksinc?",
        date: "Our Experience",
        excerpt: "We take time to understand our clients and provide the perfect end result.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#475569]" },
                "nworksinc is a group of companies that merged due to the uniqueness of goals and projection. All departments sometimes, if not always, work together to create an exceptional product."
            ),
            React.createElement("p", { className: "mb-8 text-[#475569]" },
                "We take time to understand our client and their needs to provide the perfect end result for both us as the company and the client. To ensure the product quality and durability at competitive prices, we are ready to meet the demands of the customer’s satisfaction with the best perceived value."
            )
        )
    },
    {
        id: 3,
        title: "Leather & Craft",
        date: "Lworks Leather",
        excerpt: "Using our creative eye beyond the boundaries of modernization in leather accessories.",
        image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#475569]" },
                "Lworks leather is the company that handles leather products branding and engraving. At Lworks, we use our creative eye beyond the boundaries of modernization in leather accessories to fashion."
            ),
             React.createElement("h4", { className: "text-lg font-bold mb-4 text-[#0F172A]" }, "Key Values:"),
             React.createElement("ul", { className: "list-disc pl-5 space-y-2 text-[#475569]" },
                React.createElement("li", null, "Client Focus"),
                React.createElement("li", null, "Client Delight"),
                React.createElement("li", null, "Standardization"),
                React.createElement("li", null, "Accountability"),
                React.createElement("li", null, "Integration")
            )
        )
    }
];

export const BRAND_NAME = 'nworksinc';
export const PRIMARY_COLOR = 'slate-900'; 
export const ACCENT_COLOR = 'sky-600';
