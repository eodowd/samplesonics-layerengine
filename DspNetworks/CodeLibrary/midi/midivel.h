template <int NumVoices> struct midivel
{
	SNEX_NODE(midivel);
	
	void prepare(PrepareSpecs ps)
	{
	}
	// Return 1 and set value if you want to process this event
	int getMidiValue(HiseEvent& e, double& value)
	{
		return 0;
	}
	
	void setExternalData(const ExternalData& d, int index)
	{
	}
	template <int P> void setParameter(double v)
	{
	}
};
