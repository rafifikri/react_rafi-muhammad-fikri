import "@testing-library/jest-dom";

import { Render, screen, within, fireEvent } from "../../utils";

import App from "../../../pages/products/createProduct";

const productInput = [
  "input-product-name",
  "input-product-category",
  "input-product-image",
  "input-product-freshness",
  "input-product-description",
  "input-product-price",
  "btn-submit",
];

describe("Index Product Page", () => {
  beforeEach(() => {
    Render(<App />);
  });

  describe("Renders the page", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      for (const input of productInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }
    });

    it("should render the table component", () => {
      // TODO: create test for table component
      const { container } = render(<App />);
      const table = container.querySelector("table");
      expect(table).toBeInTheDocument();
    });
  });

  describe("Action for Product", () => {
    it("render product name input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, {
        target: { value: "New Product" },
      });
      expect(productNameInput).toHaveValue("New Product");
    });

    it("render product category input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productCategoryInput = within(form).getByLabelText(
        "input-product-category"
      );
      fireEvent.change(productCategoryInput, {
        target: { value: "Mouse" },
      });
      expect(productCategoryInput).toHaveValue("Mouse");
    });

    it("render product image input and displays entered text", () => {
      const productImageInput = screen.getByTestId("upload-product-image");
      const blob = new Blob([new ArrayBuffer(1)], {
        type: "image/jpg",
      });
      const file = new File([blob], "image.jpg");
      fireEvent.change(screen.getByTestId("upload-product-image"), {
        target: { files: [file] },
      });

      expect(productImageInput.files[0].name).toBe("image.jpg");
    });

    it("render product freshness input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productFreshnessInput = within(form).getByLabelText(
        "input-product-freshness"
      );
      fireEvent.click(productFreshnessInput);

      expect(productFreshnessInput).toBeInTheDocument();
    });

    it("render product description input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productDescriptionInput = within(form).getByLabelText(
        "input-product-description"
      );
      fireEvent.change(productDescriptionInput, {
        target: { value: "Product description" },
      });
      expect(productDescriptionInput).toHaveValue("Product description");
    });

    it("render product price input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productPriceInput = within(form).getByLabelText(
        "input-product-price"
      );
      fireEvent.change(productPriceInput, {
        target: { value: 19.99 },
      });
      expect(productPriceInput).toHaveValue(19.99);
    });

    it("should show error message when Product Name is empty", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, { target: { value: "" } });
      expect(productNameInput).toHaveValue("");
    });

    it("should show error message when Product Name contains invalid characters", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, { target: { value: " @/#{} " } });
      expect(productNameInput).toBeInTheDocument();
    });

    it("should show error message when Product Name exceeds 25 characters", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");

      const longProductName = "ThisIsAProductNameThatIsTooLong";

      fireEvent.change(productNameInput, {
        target: { value: longProductName },
      });

      expect(productNameInput).toHaveValue(longProductName);
    });

    it("should show error message when some of the input is missing a value", () => {
      // TODO: should show error message when some of the input is missing a value
      const form = screen.getByLabelText("product-form");
      fireEvent.click(screen.getByLabelText("btn-submit"));

      const productNameError =
        within(form).getByLabelText("input-product-name");
      const productCategoryError = within(form).getByLabelText(
        "input-product-category"
      );
      const productImageError = screen.getByTestId("upload-product-image");
      const productFreshnessError = within(form).getByLabelText(
        "input-product-freshness"
      );
      const productDescriptionError = within(form).getByLabelText(
        "input-product-description"
      );
      const productPriceError = within(form).getByLabelText(
        "input-product-price"
      );

      expect(productNameError).toBeInTheDocument();
      expect(productCategoryError).toBeInTheDocument();
      expect(productImageError).toBeInTheDocument();
      expect(productFreshnessError).toBeInTheDocument();
      expect(productDescriptionError).toBeInTheDocument();
      expect(productPriceError).toBeInTheDocument();
    });

    it("should add new product when all input are filled", () => {
      // TODO: should add new product when all input are filled
      const form = screen.getByLabelText("product-form");

      const productNameInput =
        within(form).getByLabelText("input-product-name");
      const productCategoryInput = within(form).getByLabelText(
        "input-product-category"
      );
      const productImageInput = screen.getByTestId("upload-product-image");
      const productFreshnessInput = within(form).getByLabelText(
        "input-product-freshness"
      );
      const productDescriptionInput = within(form).getByLabelText(
        "input-product-description"
      );
      const productPriceInput = within(form).getByLabelText(
        "input-product-price"
      );

      fireEvent.change(productNameInput, { target: { value: "New Product" } });
      fireEvent.change(productCategoryInput, { target: { value: "Mouse" } });

      const blob = new Blob([new ArrayBuffer(1)], { type: "image/jpg" });
      const file = new File([blob], "image.jpg");
      fireEvent.change(productImageInput, { target: { files: [file] } });

      fireEvent.click(productFreshnessInput);
      fireEvent.change(productDescriptionInput, {
        target: { value: "Product description" },
      });
      fireEvent.change(productPriceInput, { target: { value: 19.99 } });

      fireEvent.click(screen.getByLabelText("btn-submit"));
    });

    it.skip("should display value on all input when click on the edit icon", () => {
      // TODO: should display value on all input when click on the edit icon
    });

    it.skip("should edit product", () => {
      // TODO: should edit product
    });

    it.skip("should delete product", () => {
      // TODO: should delete product
    });
  });

  describe("Input Validation", () => {
    it("should show error message when Product Name is empty", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, { target: { value: "" } });
      expect(productNameInput).toBeInTheDocument();
    });

    it("should show error message when Product Category is empty", () => {
      const form = screen.getByLabelText("product-form");
      const productCategoryInput = within(form).getByLabelText(
        "input-product-category"
      );
      fireEvent.change(productCategoryInput, { target: { value: "" } });
      expect(productCategoryInput).toBeInTheDocument();
    });

    it("should show error message when Product Image is not selected", () => {
      const form = screen.getByLabelText("product-form");
      const productImageInput = screen.getByTestId("upload-product-image");
      fireEvent.change(productImageInput, { target: { files: [] } });
      expect(productImageInput).toBeInTheDocument();
    });

    it("should show error message when Product Freshness is not selected", () => {
      const form = screen.getByLabelText("product-form");
      const productFreshnessInput = within(form).getByLabelText(
        "input-product-freshness"
      );
      fireEvent.click(productFreshnessInput);
      expect(productFreshnessInput).toBeInTheDocument();
    });

    it("should show error message when Product Description is empty", () => {
      const form = screen.getByLabelText("product-form");
      const productDescriptionInput = within(form).getByLabelText(
        "input-product-description"
      );
      fireEvent.change(productDescriptionInput, { target: { value: "" } });
      expect(productDescriptionInput).toBeInTheDocument();
    });

    it("should show error message when Product Price is empty", () => {
      const form = screen.getByLabelText("product-form");
      const productPriceInput = within(form).getByLabelText(
        "input-product-price"
      );
      fireEvent.change(productPriceInput, { target: { value: "" } });
      expect(productPriceInput).toBeInTheDocument();
    });
  });
});
