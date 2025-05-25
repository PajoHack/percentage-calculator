console.log("Script loaded.");

function calculate() {
    const percent = parseFloat(document.getElementById("percent").value);
    const total = parseFloat(document.getElementById("total").value);
    const resultDiv = document.getElementById("result");
  
    if (isNaN(percent) || isNaN(total)) {
      resultDiv.textContent = "Please enter valid numbers.";
      resultDiv.classList.remove("hidden", "text-green-700");
      resultDiv.classList.add("text-red-600");
      return;
    }
  
    const result = (percent / 100) * total;
    resultDiv.textContent = `${percent}% of ${total} is ${result.toFixed(2)}`;
    resultDiv.classList.remove("hidden", "text-red-600");
    resultDiv.classList.add("text-green-700");
  }
  