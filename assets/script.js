document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".js-counter");

  const runCounter = (el, to) => {
    const duration = 900;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;
    const ease = (t) => t * (2 - t);

    const interval = setInterval(() => {
      frame++;
      const progress = ease(frame / totalFrames);
      const current = Math.round(to * progress);
      el.textContent = current;
      if (frame === totalFrames) clearInterval(interval);
    }, duration / totalFrames);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          runCounter(el, target);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((c) => observer.observe(c));

  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".acc-header");
    const body = item.querySelector(".acc-body");
    const arrow = item.querySelector(".acc-arrow");

    header.addEventListener("click", () => {
      const isOpen = body.style.maxHeight && body.style.maxHeight !== "0px";

      // Tutup semua item lain
      document.querySelectorAll(".acc-body").forEach((b) => {
        b.style.maxHeight = null;
      });
      document.querySelectorAll(".acc-arrow").forEach((a) => {
        a.style.transform = "rotate(0deg)";
      });

      // Kalau sebelumnya sudah terbuka → selesai
      if (isOpen) return;

      // Buka item ini
      body.style.maxHeight = body.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)";
    });
  });
});

const productsData = {
  "sd-1": {
    title: "Paket 9 - Seri Tinta Emas Buku OSN",
    category: "SD",
    categoryClass: "bg-red-100 text-red-800",

    oldPrice: "Rp 3.500.000",
    newPrice: "Rp 3.150.000",
    discountBadge: "10%",

    image: "assets/image/highlight_sd.png",
    description:
      "Paket materi dan kumpulan soal lengkap Olimpiade Sains Nasional untuk jenjang SD/MI atau sederajat. Total ada 9 jilid untuk bidang Matematika, dan IPA.",
    contents: [
      "📚 Total 9 Jilid",
      "✅ Buku Materi, Soal & Pembahasan",
      "🎯 Cocok Untuk Pemahaman Mendalam",
      "🎯 Cocok Untuk Pengenalan Tipe Soal",
    ],
  },
  "smp-1": {
    title: "Paket 21 - Strategi Jitu Juara Olimpiade",
    category: "SMP",
    categoryClass: "bg-blue-100 text-blue-800",

    oldPrice: "Rp 7.750.000",
    newPrice: "Rp 6.975.000",
    discountBadge: "10%",

    image: "assets/image/highlight_smp.png",
    description:
      "Paket materi dan kumpulan soal lengkap Olimpiade Sains Nasional untuk jenjang SMP/MTs atau sederajat. Total ada 21 jilid untuk bidang Matematika, IPA, dan IPS.",
    contents: [
      "📚 Total 21 Jilid",
      "✅ Buku Materi, Soal & Pembahasan",
      "🎯 Cocok Untuk Pemahaman Mendalam",
      "🎯 Cocok Untuk Pengenalan Tipe Soal",
    ],
  },
  "sma-1": {
    title: "Paket 24 Plus - Kumpulan Soal & Pembahasan",
    category: "SMA",
    categoryClass: "bg-yellow-100 text-yellow-800",

    oldPrice: "Rp 4.500.000",
    newPrice: "Rp 4.050.000",
    discountBadge: "10%",

    image: "assets/image/highlight_sma_1.png",
    description:
      "Paket kumpulan soal lengkap Olimpiade Sains Nasional untuk jenjang SMA/MA/SMK/MAK atau sederajat. Total ada 27 jilid untuk 9 bidang: Matematika, Fisika, Kimia, Biologi, Ekonomi, Geografi, Kebumian, Astronomi, & Informatika.",
    contents: [
      "📚 Total 27 Jilid",
      "✅ Buku Soal & Pembahasan",
      "🎯 Cocok Untuk Pengenalan Tipe Soal",
      "📝 Menggunakan Kertas Yang Nyaman Dibaca",
    ],
  },
  "sma-2": {
    title: "Paket 27 - Stategi Jitu Menjuarai Olimpiade",
    category: "SMA",
    categoryClass: "bg-yellow-100 text-yellow-800",

    oldPrice: "Rp 6.500.000",
    newPrice: "Rp 5.850.000",
    discountBadge: "10%",

    image: "assets/image/highlight_sma_2.png",
    description:
      "Paket kumpulan soal lengkap Olimpiade Sains Nasional untuk jenjang SMA/MA/SMK/MAK atau sederajat. Total ada 27 jilid untuk 9 bidang: Matematika, Fisika, Kimia, Biologi, Ekonomi, Geografi, Kebumian, Astronomi, & Informatika.",
    contents: [
      "📚 Total 27 Jilid",
      "✅ Buku Soal & Pembahasan",
      "🎯 Cocok Untuk Pengenalan Tipe Soal",
      "📝 Menggunakan Kertas Yang Premium",
    ],
  },
  "sma-3": {
    title: "Paket 30 - Sukses Menuju Olimpiade Sains",
    category: "SMA",
    categoryClass: "bg-yellow-100 text-yellow-800",

    oldPrice: "Rp 10.500.000",
    newPrice: "Rp 9.450.000",
    discountBadge: "10%",

    image: "assets/image/highlight_sma_3.png",
    description:
      "Paket materi dan latihan soal lengkap Olimpiade Sains Nasional untuk jenjang SMA/MA/SMK/MAK atau sederajat. Total ada 30 jilid untuk 9 bidang: Matematika, Fisika, Kimia, Biologi, Ekonomi, Geografi, Kebumian, Astronomi, & Informatika.",
    contents: [
      "📚 Total 30 Jilid",
      "✅ Buku Materi, Soal & Pembahasan",
      "🎯 Cocok Untuk Pendalaman Materi",
      "🎯 Cocok Untuk Pengenalan Tipe Soal",
      "📝 Menggunakan Kertas Yang Premium",
      "📚 Dua jilid materi IBO",
    ],
  },
  "sma-4": {
    title: "Paket Jago OSN - Seri Emas LOPI",
    category: "SMA",
    categoryClass: "bg-yellow-100 text-yellow-800",

    oldPrice: "",
    newPrice: "PRE ORDER",
    discountBadge: "NEW",

    image: "assets/image/highlight_sma_4.png",
    description:
      "Paket latihan soal lengkap Olimpiade Sains Nasional untuk jenjang SMA/MA/SMK/MAK atau sederajat. Total ada 30 jilid untuk 9 bidang: Matematika, Fisika, Kimia, Biologi, Ekonomi, Geografi, Kebumian, Astronomi, & Informatika.",
    contents: [
      "📚 Total 9 Jilid",
      "✅ Buku Soal & Pembahasan",
      "🎯 Cocok Untuk Pengenalan Tipe Soal",
      "📝 Menggunakan Kertas Yang Premium",
      "📚 Soal Pilihan Terbaru 2026",
    ],
  },
};

const defaultConfig = {
  background_color: "#1e3a8a",
  surface_color: "#ffffff",
  text_color: "#111827",
  primary_action_color: "#3b82f6",
  secondary_action_color: "#60a5fa",
  font_family: "system-ui, -apple-system, sans-serif",
  font_size: 16,
  main_title: "Buku Referensi Olimpiade Sains Terlengkap",
  subtitle:
    "Persiapan maksimal untuk meraih medali di kompetisi sains nasional dan internasional",
  cta_button: "Dapatkan Sekarang",
  about_title: "Mengapa Memilih Buku Kami?",
  about_description:
    "Buku referensi olimpiade sains yang telah dipercaya oleh ribuan siswa berprestasi. Disusun oleh tim ahli dengan pengalaman puluhan tahun dalam membimbing juara olimpiade. Materi lengkap, sistematis, dan dilengkapi dengan soal-soal latihan bertaraf internasional.",
  products_title: "Paket Buku Olimpiade",
  features_title: "Keunggulan Produk",
  feature1_title: "Materi Terlengkap",
  feature1_desc:
    "Mencakup semua topik olimpiade dari tingkat kabupaten hingga internasional dengan pembahasan mendalam",
  feature2_title: "Soal Berkualitas",
  feature2_desc:
    "Ribuan soal latihan dengan tingkat kesulitan bertingkat dan pembahasan detail untuk setiap soal",
  feature3_title: "Tips & Strategi",
  feature3_desc:
    "Strategi jitu menghadapi olimpiade dari para peraih medali dan mentor berpengalaman",
  cta_title: "Siap Meraih Medali Olimpiade?",
  cta_description:
    "Bergabunglah dengan ribuan siswa yang telah meraih prestasi gemilang bersama buku referensi kami",
  cta_button_final: "Pesan Sekarang",
  footer_text: "© 2024 Buku Olimpiade Sains. Semua hak dilindungi.",
};

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // Update active button
    filterButtons.forEach((b) => {
      b.classList.remove("active", "bg-blue-600", "text-white");
      b.classList.add(
        "bg-white",
        "text-gray-700",
        "border-2",
        "border-gray-300"
      );
    });
    btn.classList.add("active", "bg-blue-600", "text-white");
    btn.classList.remove(
      "bg-white",
      "text-gray-700",
      "border-2",
      "border-gray-300"
    );

    // Filter products
    productCards.forEach((card) => {
      if (filter === "semua" || card.dataset.category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Modal functionality
const modal = document.getElementById("product-modal");
const closeModalBtn = document.getElementById("close-modal");

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const productId = card.dataset.productId;
    const product = productsData[productId];

    if (product) {
      document.getElementById("modal-title").textContent = product.title;
      document.getElementById("modal-category").textContent = product.category;
      document.getElementById(
        "modal-category"
      ).className = `inline-block ${product.categoryClass} text-xs font-semibold px-3 py-1 rounded-full mb-4`;
      document.getElementById("modal-old-price").textContent =
        product.oldPrice || "";
      document.getElementById("modal-new-price").textContent =
        product.newPrice || "";
      document.getElementById("modal-discount-badge").textContent =
        product.discountBadge || "";
      document.getElementById("modal-description").textContent =
        product.description;

      // Gambar modal
      const modalImage = document.getElementById("modal-image");

      if (product.image) {
        modalImage.innerHTML = `
          <img src="${product.image}"
          alt="${product.title}"
          class="w-full h-full object-cover" />
        `;
      } else {
        modalImage.innerHTML = `
          <div class="h-full w-full flex items-center justify-center opacity-50">
            <p>No image available</p>
          </div>
        `;
      }

      const contentsList = document.getElementById("modal-contents");
      contentsList.innerHTML = "";
      product.contents.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "flex items-start";
        contentsList.appendChild(li);
      });

      document.getElementById("modal-wa-order").onclick = () => {
        waOrderBook(product.title);
      };

      modal.classList.add("show");
    }
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

document.getElementById("modal-order-btn").addEventListener("click", () => {
  const productTitle = document.getElementById("modal-title").textContent;
  const message = document.createElement("div");
  message.className =
    "fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50";
  message.textContent = `Terima kasih! Pesanan "${productTitle}" sedang diproses.`;
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
    modal.classList.remove("show");
  }, 3000);
});

async function onConfigChange(config) {
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;
  const baseFontStack = "system-ui, -apple-system, sans-serif";

  // Apply colors
  const heroSections = document.querySelectorAll(".hero-gradient");
  heroSections.forEach((section) => {
    section.style.background = `linear-gradient(135deg, ${
      config.background_color || defaultConfig.background_color
    } 0%, #0f172a 100%)`;
  });

  const cards = document.querySelectorAll(
    ".card-hover, .product-card, .modal-content"
  );
  cards.forEach((card) => {
    card.style.backgroundColor =
      config.surface_color || defaultConfig.surface_color;
  });

  const textElements = document.querySelectorAll(
    "h1, h2, h3, p:not(.text-blue-100):not(.text-gray-600):not(.text-gray-700)"
  );
  textElements.forEach((el) => {
    if (
      !el.classList.contains("text-white") &&
      !el.classList.contains("text-blue-100") &&
      !el.classList.contains("text-gray-300")
    ) {
      el.style.color = config.text_color || defaultConfig.text_color;
    }
  });

  const primaryButtons = document.querySelectorAll(
    ".btn-primary, #modal-order-btn"
  );
  primaryButtons.forEach((btn) => {
    btn.style.backgroundColor =
      config.primary_action_color || defaultConfig.primary_action_color;
  });

  const filterBtns = document.querySelectorAll(".filter-btn.active");
  filterBtns.forEach((btn) => {
    btn.style.backgroundColor =
      config.primary_action_color || defaultConfig.primary_action_color;
  });

  const iconBgs = document.querySelectorAll(".bg-blue-100");
  iconBgs.forEach((bg) => {
    bg.style.backgroundColor =
      config.secondary_action_color || defaultConfig.secondary_action_color;
    bg.style.opacity = "0.2";
  });

  // Apply fonts
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  // Apply font sizes
  const mainTitle = document.getElementById("main-title");
  if (mainTitle) mainTitle.style.fontSize = `${baseSize * 2.5}px`;

  const subtitle = document.getElementById("subtitle");
  if (subtitle) subtitle.style.fontSize = `${baseSize * 1.25}px`;

  const h2Elements = document.querySelectorAll("h2");
  h2Elements.forEach((h2) => (h2.style.fontSize = `${baseSize * 2}px`));

  const h3Elements = document.querySelectorAll("h3");
  h3Elements.forEach((h3) => (h3.style.fontSize = `${baseSize * 1.25}px`));

  const pElements = document.querySelectorAll("p");
  pElements.forEach((p) => (p.style.fontSize = `${baseSize}px`));

  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => (btn.style.fontSize = `${baseSize * 1.125}px`));

  // Update text content
  document.getElementById("main-title").textContent =
    config.main_title || defaultConfig.main_title;
  document.getElementById("subtitle").textContent =
    config.subtitle || defaultConfig.subtitle;
  document.getElementById("cta-button").textContent =
    config.cta_button || defaultConfig.cta_button;
  document.getElementById("about-title").textContent =
    config.about_title || defaultConfig.about_title;
  document.getElementById("about-description").textContent =
    config.about_description || defaultConfig.about_description;
  document.getElementById("products-title").textContent =
    config.products_title || defaultConfig.products_title;
  document.getElementById("features-title").textContent =
    config.features_title || defaultConfig.features_title;
  document.getElementById("feature1-title").textContent =
    config.feature1_title || defaultConfig.feature1_title;
  document.getElementById("feature1-desc").textContent =
    config.feature1_desc || defaultConfig.feature1_desc;
  document.getElementById("feature2-title").textContent =
    config.feature2_title || defaultConfig.feature2_title;
  document.getElementById("feature2-desc").textContent =
    config.feature2_desc || defaultConfig.feature2_desc;
  document.getElementById("feature3-title").textContent =
    config.feature3_title || defaultConfig.feature3_title;
  document.getElementById("feature3-desc").textContent =
    config.feature3_desc || defaultConfig.feature3_desc;
  document.getElementById("cta-title").textContent =
    config.cta_title || defaultConfig.cta_title;
  document.getElementById("cta-description").textContent =
    config.cta_description || defaultConfig.cta_description;
  document.getElementById("cta-button-final").textContent =
    config.cta_button_final || defaultConfig.cta_button_final;
  document.getElementById("footer-text").textContent =
    config.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        },
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        },
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        },
      },
      {
        get: () =>
          config.primary_action_color || defaultConfig.primary_action_color,
        set: (value) => {
          config.primary_action_color = value;
          window.elementSdk.setConfig({ primary_action_color: value });
        },
      },
      {
        get: () =>
          config.secondary_action_color || defaultConfig.secondary_action_color,
        set: (value) => {
          config.secondary_action_color = value;
          window.elementSdk.setConfig({ secondary_action_color: value });
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      },
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      },
    },
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["main_title", config.main_title || defaultConfig.main_title],
    ["subtitle", config.subtitle || defaultConfig.subtitle],
    ["cta_button", config.cta_button || defaultConfig.cta_button],
    ["about_title", config.about_title || defaultConfig.about_title],
    [
      "about_description",
      config.about_description || defaultConfig.about_description,
    ],
    ["products_title", config.products_title || defaultConfig.products_title],
    ["features_title", config.features_title || defaultConfig.features_title],
    ["feature1_title", config.feature1_title || defaultConfig.feature1_title],
    ["feature1_desc", config.feature1_desc || defaultConfig.feature1_desc],
    ["feature2_title", config.feature2_title || defaultConfig.feature2_title],
    ["feature2_desc", config.feature2_desc || defaultConfig.feature2_desc],
    ["feature3_title", config.feature3_title || defaultConfig.feature3_title],
    ["feature3_desc", config.feature3_desc || defaultConfig.feature3_desc],
    ["cta_title", config.cta_title || defaultConfig.cta_title],
    [
      "cta_description",
      config.cta_description || defaultConfig.cta_description,
    ],
    [
      "cta_button_final",
      config.cta_button_final || defaultConfig.cta_button_final,
    ],
    ["footer_text", config.footer_text || defaultConfig.footer_text],
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues,
  });
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9a16806a55299ce2',t:'MTc2MzYyNjU0OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
