    import java.util.*;
    public class hashSet{
        public static void main(String[] args){
            String x = "TEST";
            String[] things = {"apple", "bob", "ham", "bob", "bacon"};
            List<String> list = Arrays.asList(things);

            System.out.printf("%s", list);
            System.out.println();

            HashSet<String> set = new HashSet<String>(list);
            System.out.printf("%s", set);
        }
    }