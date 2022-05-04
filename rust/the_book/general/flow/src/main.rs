use std::io;

fn main() {
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("failed to read line");

    let input: u8 = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => panic!("aaaa"),
    };

    let mut i: u8 = 1;
    let mut f: u8 = 0;

    for _l in 1..input {
        let tmp = i;
        i = f + i;
        f = tmp
    }

    println!("{:?}", i);
}
