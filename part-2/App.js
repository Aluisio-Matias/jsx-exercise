const App = () => (
    <div>
        <Tweet 
        username="testUser1" 
        name="Tester" date={new Date().toDateString()} 
        message="This is my first Tweet!" 
        />
        <Tweet 
        username="foxy" 
        name="Fox" date={new Date().toDateString()} 
        message="Going to the woods" 
        />
        <Tweet 
        username="tweeter" 
        name="Johnny" 
        date={new Date().toDateString()} 
        message="To the moon!" 
        />
    </div>
)

