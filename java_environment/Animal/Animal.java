import java.util.LinkedList;
import java.util.ArrayList;

/**
 * Animal Shelter
 */
public class Animal {
     static class AnimalObj {
        private int order;
        protected String name;
        public AnimalObj(String n){ name = n; }
        public void setOrder(int ord){ order = ord; }
        public int getOrder(){ return order; }

        public boolean isOlderThan(AnimalObj a){
            return this.order < a.getOrder();
        }
    }

    static class AnimalQueue {
        LinkedList<Dog> dogs = new LinkedList<Dog>();
        LinkedList<Cat> cats = new LinkedList<Cat>();
        private int order = 0;

        public void enqueue(AnimalObj a){
            a.setOrder(order);
            order++;

            if(a instanceof Dog) dogs.addLast((Dog) a);
            else if(a instanceof Cat) cats.addLast((Cat)a);
        }

        public AnimalObj dequeueAny(){
            if (dogs.size()==0){
                return dequeueCats();
            } else if (cats.size()==0) {
                return dequeueDogs();
            }
            Dog dog = dogs.peek();
            Cat cat = cats.peek();
            if (dog.isOlderThan(cat)){
                return dequeueDogs();
            } else {
                return dequeueCats();
            }
        }

        public Dog dequeueDogs(){
            return dogs.poll();
        }

        public Cat dequeueCats(){
            return cats.poll();
        }

    }

    public static class Dog extends AnimalObj{
        public Dog(String n) { super(n); }
    }

    public static class Cat extends AnimalObj{
        public Cat(String n) { super(n); }
    }
    public static void main(String[] args) {
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        // System.out.println("Bowser.name");
        AnimalQueue AnimalShelter = new AnimalQueue();
        AnimalObj Bowser = new Dog("KingKoopa");
        AnimalObj Incineroar = new Dog("CatPokemon");
        AnimalShelter.enqueue(Bowser);
        AnimalShelter.enqueue(Incineroar);
        System.out.println(AnimalShelter.dequeueDogs().name);
        // System.out.println(AnimalShelter.dequeueDogs().peek());

    }
}