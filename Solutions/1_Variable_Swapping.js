// --- Initial Values (Do not change) ---
    var a = "3";
    var b = "8";

    // --- Logic: Variable Swap ---
    // Use a temporary variable 'c' to hold the value of 'a' 
    // so it isn't lost when we overwrite 'a' with 'b'.
    var c = a;
    a = b;
    b = c;

    // --- Output (Do not change) ---
    console.log("a is " + a);
    console.log("b is " + b);
