fun main(args: Array<String>) {
	println(calcularJuros(5.0))
    println(calcularJuros(15.0))
    println(calcularJuros(25.0))
}

fun calcInterest(number:Double) = number * respectivePercentByNumber(number)

fun respectivePercentByNumber(value: Double) = when {
    number < 10.0 -> 1.1
    number in (10.0 .. 20.0) -> 1.15
    else -> 1.2
}
