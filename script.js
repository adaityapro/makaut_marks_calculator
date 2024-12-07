function calculateMarks() {
    // Get input values from the HTML form
    const sgpa1 = parseFloat(document.getElementById("sgpa1").value);
    const sgpa2 = parseFloat(document.getElementById("sgpa2").value);
    const totalSubjects1 = parseInt(document.getElementById("totalSubjects1").value);
    const totalSubjects2 = parseInt(document.getElementById("totalSubjects2").value);
  
    // Calculate YGPA
    const ygpa = (sgpa1 + sgpa2) / 2;
  
    // Calculate Percentage
    const percentage = (ygpa - 0.75) * 10;
  
    // Calculate Total Marks
    const totalMarks = (totalSubjects1 + totalSubjects2)*100;
  
    // Calculate Obtained Marks
    const obtainedMarks = (totalMarks / 100) * percentage;
  
    // Display results in the HTML
    document.getElementById("ygpa-result").textContent = ygpa.toFixed(2);
    document.getElementById("percentage-result").textContent = percentage.toFixed(2) + "%";
    document.getElementById("totalMarks-result").textContent = totalMarks;
    document.getElementById("obtainedMarks-result").textContent = obtainedMarks.toFixed(2);
  }