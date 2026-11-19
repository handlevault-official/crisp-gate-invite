const ALLOWED_BADGE_CLASSES = new Set([
  "stamp-dashed-ink",
  "stamp-wax-crimson",
  "stamp-wax-gold",
  "stamp-custom-border"
]);

export function resolvePreopenStamp(stamps = [], selectedId = null) {
  if (!Array.isArray(stamps) || stamps.length === 0) {
    return {
      id: "default-emoji",
      emoji: "✉️",
      title: "Standard Dispatch",
      badge_style: "dashed-ink",
      tier: "free"
    };
  }

  const matched = selectedId
    ? stamps.find((item) => item.id === selectedId)
    : null;

  return matched || stamps[0];
}

export function renderPreopenEmojiBadge(targetEl, stamp) {
  if (!targetEl || !stamp) return;

  const rawClass = stamp.badge_style
    ? `stamp-${String(stamp.badge_style).trim()}`
    : "stamp-dashed-ink";
  const badgeClass = ALLOWED_BADGE_CLASSES.has(rawClass)
    ? rawClass
    : "stamp-dashed-ink";

  targetEl.innerHTML = "";

  const pill = document.createElement("span");
  pill.className = `stamp-badge ${badgeClass}`;

  const emojiEl = document.createElement("span");
  emojiEl.className = "badge-emoji";
  emojiEl.textContent = String(stamp.emoji || "✉️");

  const titleEl = document.createElement("span");
  titleEl.className = "badge-label";
  titleEl.textContent = String(stamp.title || "Mail Stamp");

  pill.append(emojiEl, titleEl);
  targetEl.appendChild(pill);
}
