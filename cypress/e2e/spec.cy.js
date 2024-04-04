

// calculator visual appareance
describe("calculator visual appareance ", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // 1.test that the calculator contains all the elements
  it("test that the calculator contains all the elements", () => {
    cy.get("#calculator").contains("0");
    cy.get("#calculator").contains("1");
    cy.get("#calculator").contains("2");
    cy.get("#calculator").contains("3");
    cy.get("#calculator").contains("4");
    cy.get("#calculator").contains("5");
    cy.get("#calculator").contains("6");
    cy.get("#calculator").contains("7");
    cy.get("#calculator").contains("8");
    cy.get("#calculator").contains("9");
    cy.get("#calculator").contains("+");
    cy.get("#calculator").contains("-");
    cy.get("#calculator").contains("*");
    cy.get("#calculator").contains("/");
    cy.get("#calculator").contains("C");
  });
});

describe("test basic operations", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // 2.test the sum of two numbers
  it("test the sum of two numbers", () => {
    cy.get("#n1").click();
    cy.get("#nplus").click();
    cy.get("#n2").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "3");
  });

  // 3.test the difference between two numbers
  it("test the difference of two numbers", () => {
    cy.get("#ntete").click();
    cy.get("#nminus").click();
    cy.get("#n2").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "6");
  });

  // 4.test multiply of two numbers
  it("test the multiply of two numbers", () => {
    cy.get("#ntete").click();
    cy.get("#nmultiply").click();
    cy.get("#n2").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "16");
  });

  // 5.test devision of two numbers
  it("test the devision of two numbers", () => {
    cy.get("#ntete").click();
    cy.get("#ndevision").click();
    cy.get("#n2").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "4");
  });
});

// test advanced scenarios
describe("test advanced scenarios", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  //.test combined operations
  it("test combined operations", () => {
    cy.get("#n6").click();
    cy.get("#ndevision").click();
    cy.get("#n2").click();
    cy.get("#nmultiply").click();
    cy.get("#n3").click();
    cy.get("#nplus").click();
    cy.get("#n3").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "19");
  });
});

//.test two-digit math operations
describe("test two-digit math operations", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("test two-digit math operations", () => {
    cy.get("#n6").click();
    cy.get("#n2").click();
    cy.get("#nplus").click();
    cy.get("#n3").click();
    cy.get("#n3").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "95");
  });
});
// test numbers starting with 0.
describe("test numbers starting with 0", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test numbers starts with 0",() => {
    cy.get("#n0").click();
    cy.get("#n1").click();
    cy.get("#nplus").click();
    cy.get("#n0").click();
    cy.get("#n1").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "2");
  })

  it("test numbers starts with 0",() => {
    cy.get("#n0").click();
    cy.get("#n1").click();
    cy.get("#n2").click();
    cy.get("#n4").click();
    cy.get("#nplus").click();
    cy.get("#n0").click();
    cy.get("#n1").click();
    cy.get("#n2").click();
    cy.get("#n4").click();
    cy.get("#nbaraz").click();
    cy.get("#display").should("have.value", "248");
  })
});
