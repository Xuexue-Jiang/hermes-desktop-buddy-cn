import { describe, expect, it } from "vitest";
import { t } from "./index";

describe("shared i18n", () => {
  it("returns Simplified Chinese text by default", () => {
    expect(t("welcome.title")).toBe("欢迎使用 Hermes");
  });

  it("falls back to the key when a Simplified Chinese key is missing", () => {
    expect(t("common.missingKey")).toBe("common.missingKey");
  });

  it("returns English text when requested", () => {
    expect(t("welcome.title", "en")).toBe("Welcome to Hermes");
  });

  it("returns zh-CN text when available", () => {
    expect(t("welcome.title", "zh-CN")).toBe("欢迎使用 Hermes");
  });

  it("returns zh-TW text when available", () => {
    expect(t("welcome.title", "zh-TW")).toBe("歡迎使用 Hermes");
  });

  it("returns es text when available", () => {
    expect(t("welcome.title", "es")).toBe("Bienvenido a Hermes");
  });

  it("returns id text when available", () => {
    expect(t("welcome.title", "id")).toBe("Selamat datang di Hermes");
  });

  it("falls back to en when zh-CN key is missing", () => {
    expect(t("nonExistent.fallbackKey", "zh-CN")).toBe(
      "nonExistent.fallbackKey",
    );
  });

  it("preserves interpolation placeholders in es", () => {
    expect(t("common.updateAvailable", "es", { version: "1.2.3" })).toBe(
      "Actualizar a v1.2.3",
    );
  });
});
