import java.util.Hashtable;

class importedHash{
    // LinkedList[] data;

    // boolean put(String key, Person value){
    //     int hashcode = getHashCode(key);
    //     int index = convertToIndex(hashcode)
    //     LinkedList list = data[index];
    //     list insert(key, value);
    // }

    public static void main(String[] args){

        Hashtable<String, String> FEcharacters = new Hashtable<String, String>();

        FEcharacters.put("char1","Marty");
        FEcharacters.put("char2","Asvel");
        FEcharacters.put("char4","Roberto");
        FEcharacters.put("char3","Halvan");

        for(String x : FEcharacters.keySet()){
            System.out.println(x + " " + FEcharacters.get(x));
        }
    }
}